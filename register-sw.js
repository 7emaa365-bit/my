// External Service Worker registration to avoid inline-CSP issues
// ⚠️ Note: Service Workers only work on HTTP/HTTPS, not on file:// protocol

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    // Check if running on file:// protocol
    if (window.location.protocol === "file:") {
      console.warn("⚠️ Service Worker cannot register on file:// protocol.");
      console.info("💡 To use Service Worker, run the app on a local server:");
      console.info("   • Using Live Server (VS Code extension)");
      console.info("   • Or: python -m http.server 8000");
      console.info("   • Or: npx http-server (requires Node.js)");
      return;
    }

    navigator.serviceWorker
      .register("./sw.js", { scope: "/" })
      .then(function (reg) {
        console.log(
          "✅ Service Worker registered successfully (scope):",
          reg.scope,
        );
      })
      .catch(function (err) {
        console.warn("⚠️ Service Worker registration failed:", err.message);
        if (err.message.includes("Unsupported protocol")) {
          console.info(
            "💡 Service Workers require HTTP/HTTPS. Use a local server instead of file://",
          );
        }
      });
  });
} else {
  console.warn("⚠️ Service Workers are not supported in this browser.");
}
