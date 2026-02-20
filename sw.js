// Minimal Service Worker for My Order - caches app shell for offline
const CACHE_NAME = "mqt-cache-v1";
const ASSETS_TO_CACHE = [
  "index.html",
  "style.css",
  "script.js",
  "manifest.json",
  "icons/icon-192.svg",
  "icons/icon-512.svg",
];

// Install: fetch each asset and add to cache individually.
// This avoids a hard failure when one resource returns 404 or network/CORS error.
self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      for (const url of ASSETS_TO_CACHE) {
        try {
          // Use fetch so we can inspect the response and handle non-OK statuses.
          const response = await fetch(url, { cache: "no-cache" });
          if (!response || !response.ok) {
            throw new Error(`Request failed (${response && response.status})`);
          }
          await cache.put(url, response.clone());
        } catch (err) {
          // Log the failing URL but do not reject the entire install.
          console.warn("Service Worker: failed to cache", url, err);
        }
      }
    })(),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((k) => {
          if (k !== CACHE_NAME) return caches.delete(k);
        }),
      ),
    ),
  );
  self.clients.claim();
});

// Helper: only cache same-origin HTTP(S) requests. Skip chrome-extension:, data:, about:, etc.
function isCacheableRequest(req) {
  try {
    const u = new URL(req.url);
    if (u.protocol !== "http:" && u.protocol !== "https:") return false;
    return u.origin === self.location.origin;
  } catch (err) {
    return false;
  }
}

self.addEventListener("fetch", (event) => {
  const req = event.request;
  // Only handle GET requests
  if (req.method !== "GET") return;

  // For navigation requests, try network first then cache fallback
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then((res) => {
          try {
            // Only cache successful responses
            if (res && res.ok && res.status === 200) {
              // Clone BEFORE reading
              const clonedRes = res.clone();
              // Cache in background without blocking response, but only for
              // same-origin HTTP(S) requests (skip chrome-extension:, data:, etc.).
              if (isCacheableRequest(req)) {
                caches.open(CACHE_NAME).then((cache) => {
                  cache.put(req, clonedRes).catch((err) => {
                    console.warn("Cache update failed:", err);
                  });
                });
              } else {
                console.debug(
                  "Skipping caching of non-cacheable request:",
                  req.url,
                );
              }
            }
            return res;
          } catch (err) {
            console.warn("Error caching navigation response:", err);
            return res;
          }
        })
        .catch(() => {
          // Fallback to cache on network error
          return caches.match(req).then((cached) => {
            return cached || caches.match("/index.html");
          });
        }),
    );
    return;
  }

  // For API/resource requests, use cache-first strategy
  // Only cache successful responses from GET requests
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) {
        return cached;
      }

      return fetch(req)
        .then((res) => {
          try {
            // Validate response before caching
            if (!res || !res.ok || res.status !== 200) {
              return res;
            }

            // Clone response for caching (MUST be done before reading body)
            const clonedRes = res.clone();
            if (isCacheableRequest(req)) {
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(req, clonedRes).catch((err) => {
                  console.warn("Cache put failed:", err);
                });
              });
            } else {
              console.debug(
                "Skipping caching of non-cacheable request:",
                req.url,
              );
            }

            return res;
          } catch (err) {
            console.warn("Error in fetch handler:", err);
            return res;
          }
        })
        .catch(() => {
          // No network and no cache - return offline page or cached index
          return caches.match("/index.html");
        });
    }),
  );
});
