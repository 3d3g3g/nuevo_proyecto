import path from "node:path";

const carpeta = "usuarios";
const usuario = "Diana";
const archivo = "datos.txt";

const ruta = path.join(carpeta, usuario, archivo);


console.log("Ruta completa:", ruta);
console.log("Carpeta: ",path.dirname(ruta));
console.log("Extension:", path.extname(ruta));
console.log("Archivo:", path.basename(ruta));