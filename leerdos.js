import fs from "node:fs";

const contenido = fs.readFileSync("mensaje.txt", "utf-8");

console.log(contenido);