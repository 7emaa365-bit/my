<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Generate PWA Icons — My Order</title>
    <style>
      body {
        font-family:
          system-ui,
          -apple-system,
          Segoe UI,
          Roboto,
          Helvetica,
          Arial;
        margin: 24px;
        color: #0b1320;
      }
      button {
        padding: 10px 14px;
        border-radius: 8px;
        border: 0;
        background: #ff6b35;
        color: white;
        font-weight: 700;
        cursor: pointer;
      }
      main {
        max-width: 720px;
      }
      pre {
        background: #f4f6f8;
        padding: 12px;
        border-radius: 8px;
        overflow: auto;
      }
    </style>
  </head>
  <body>
    <main>
      <h1>Generate placeholder icons for My Order</h1>
      <p>
        This page will create two PNG placeholders (192×192 and 512×512) and
        download them to your computer. Save them in your project's
        <strong>/icons</strong> folder and push to GitHub Pages.
      </p>
      <p><button id="generate">Generate & Download Icons</button></p>

      <h3>Files created</h3>
      <ul>
        <li><code>icon-192.png</code> (192×192)</li>
        <li><code>icon-512.png</code> (512×512)</li>
      </ul>

      <h3>How to use</h3>
      <ol>
        <li>Click <strong>Generate & Download Icons</strong>.</li>
        <li>
          Move the downloaded files into the <code>icons/</code> folder at the
          repository root.
        </li>
        <li>
          Commit and push to GitHub. Manifest already references
          <code>icons/icon-192.png</code> and <code>icons/icon-512.png</code>.
        </li>
      </ol>

      <h3>Preview</h3>
      <div
        id="previews"
        style="display: flex; gap: 12px; align-items: center"
      ></div>

      <h3>Manual command (optional)</h3>
      <pre>
git add icons/icon-192.png icons/icon-512.png
git commit -m "add placeholder PWA icons"
git push</pre
      >
    </main>

    <script>
      document.getElementById("generate").addEventListener("click", () => {
        const specs = [
          { size: 192, name: "icon-192.png" },
          { size: 512, name: "icon-512.png" },
        ];

        specs.forEach((s) => {
          const c = document.createElement("canvas");
          c.width = c.height = s.size;
          const ctx = c.getContext("2d");
          // background
          ctx.fillStyle = "#FF6B35";
          ctx.fillRect(0, 0, s.size, s.size);
          // white circle
          ctx.fillStyle = "white";
          const r = s.size * 0.36;
          ctx.beginPath();
          ctx.arc(s.size / 2, s.size / 2, r, 0, Math.PI * 2);
          ctx.fill();
          // emoji/logo
          ctx.font = Math.floor(s.size * 0.36) + "px serif";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "#FF6B35";
          ctx.fillText(
            "🍔",
            s.size / 2,
            s.size / 2 + Math.floor(s.size * 0.02),
          );

          // show preview
          const img = new Image();
          img.src = c.toDataURL("image/png");
          img.width = s.size / (s.size === 512 ? 2 : 1);
          img.height = img.width;
          img.style.border = "1px solid rgba(0,0,0,0.08)";
          img.style.borderRadius = "12px";
          document.getElementById("previews").appendChild(img);

          // trigger download
          const a = document.createElement("a");
          a.href = c.toDataURL("image/png");
          a.download = s.name;
          document.body.appendChild(a);
          a.click();
          a.remove();
        });

        alert(
          "Downloaded placeholder icons. Move them into your project /icons folder and push to GitHub.",
        );
      });
    </script>
  </body>
</html>
