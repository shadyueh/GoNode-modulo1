const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.end("Hello Node"); //responde a requisição para '/'
});

app.get("/login", (req, res) => {
  return res.end("Login"); //responde a requisição para '/login'
});

app.listen(3000);

//acessar http://localhost:3000 no navegador para testar
