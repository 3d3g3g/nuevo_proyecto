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
    if (req.method === "GET" && req.url === "/login") {
  res.end("Pagina de inicio de sesion");
  }
  if (req.method === "GET" && req.url === "/perfil") {
    res.end("Pagina de perfil");
}
});

servidor.listen(8080, () => {
  console.log("Servidor ejecutándose en http://localhost:8080");
});