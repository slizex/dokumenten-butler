// Kopiert die Web-App (eine index.html + PWA-Assets) aus dem Repo-Root in androidapp/www,
// damit Capacitor sie als App-Inhalt buendeln kann. So bleibt EIN Code-Stand fuer Web + App.
import { mkdirSync, copyFileSync, existsSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const appRoot = join(here, "..");        // androidapp/
const repoRoot = join(appRoot, "..");    // Repo-Root (enthaelt index.html)
const www = join(appRoot, "www");

const assets = [
  "index.html",
  "manifest.webmanifest",
  "sw.js",
  "icon-192.png",
  "icon-512.png",
];

if (existsSync(www)) rmSync(www, { recursive: true, force: true });
mkdirSync(www, { recursive: true });

let copied = 0;
for (const a of assets) {
  const src = join(repoRoot, a);
  if (existsSync(src)) {
    copyFileSync(src, join(www, a));
    copied++;
  } else {
    console.warn("WARN: fehlt im Repo-Root:", a);
  }
}
console.log(`www/ gebuendelt (${copied}/${assets.length} Dateien) aus ${repoRoot}`);
if (!existsSync(join(www, "index.html"))) {
  console.error("FEHLER: index.html fehlt in www/ – Build wuerde leer sein.");
  process.exit(1);
}
