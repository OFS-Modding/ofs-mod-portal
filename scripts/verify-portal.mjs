import { readFile } from "node:fs/promises";

const page = await readFile(new URL("../pages/index.html", import.meta.url), "utf8");
const required = [
  "https://ofs-modding.github.io/ofs-mod-catalog/catalog.json",
  "https://github.com/OFS-Modding/ofs-loader/releases/latest/download/OFS-Installer-win-x64.exe",
  "https://github.com/OFS-Modding/ofs-mod-catalog/issues/new?template=mod-submission.yml",
  'width="64" height="64"',
];

for (const value of required) {
  if (!page.includes(value)) throw new Error(`Missing portal contract: ${value}`);
}

console.log("verified static portal contracts");
