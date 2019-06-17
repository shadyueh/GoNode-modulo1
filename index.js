const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.end(`Bem vindo, ${req.query.name}`); //usando parâmetro passado por query string
});

app.get("/login", (req, res) => {
  return res.end("Login"); //responde a requisição para '/login'
});

app.get("/nome/:name", (req, res) => {
  return res.json({
    message: `Bem vindo, ${req.params.name}`
  }); //passando json como resposta
});

app.listen(3000);

//acessar http://localhost:3000 no navegador para testar
