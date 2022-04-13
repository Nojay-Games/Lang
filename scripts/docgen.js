const fs = require("fs");
const path = require("path");

const typings = path.join(__dirname, "../", "typings");

const en_us = require("../localizations/en-us.json");

const langs = fs.readdirSync(path.join(__dirname, "../", "localizations"));

let totalString = `${langs.map(i => `export const ${i.replace(/\.json$/, "").replace("-", "_")}: Lang;`).join("\n")}\n\nexport type Lang = ${JSON.stringify(en_us, null, "\t")}\n`;

fs.writeFileSync(`${typings}/index.d.ts`, totalString, { encoding: "utf8" });

console.log("Done generating docs");
