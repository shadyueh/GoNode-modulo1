const express = require("express");

const app = express();

// exemplo de interceptador (middleware)
const logMiddleware = (req, res, next) => {
  console.log(
    `HOST: ${req.headers.host} | URL: ${req.url} | METHOD: ${req.method}`
  );
  return next(); //evita o bloqueio do fluxo da requisição
};

app.get("/", logMiddleware, (req, res) => {
  return res.end(`Bem vindo, ${req.query.name}`); //usando parâmetro passado por query string
});

app.get("/nome/:name", (req, res) => {
  return res.json({
    message: `Bem vindo, ${req.params.name}`
  }); //passando json como resposta
});

app.listen(3000);

// use yarn start para iniciar o server com o nodemon
// acessar http://localhost:3000 no navegador para testar
