import http from "node:http";

const servidor = http.createServer((req, res) => {

  if (req.method === "GET" && req.url === "/") {
    res.end("Bienvenido a mi servidor");
  }

  if (req.method === "GET" && req.url === "/usuarios") {
    res.end("Lista de usuarios");
  }
  
  if (req.method === "GET" && req.url === "/productos") {
  res.end("Lista de productos");
}

});

servidor.listen(8080, () => {
  console.log("Servidor ejecutándose en http://localhost:8080");
});