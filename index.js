const express = require("express");

const app = express();

// exemplo de interceptador (middleware)
const logMiddleware = (req, res, next) => {
  console.log(
    `HOST: ${req.headers.host} | URL: ${req.url} | METHOD: ${req.method}`
  );
  //evita o bloqueio do fluxo da requisição
  return next();
};

// permite que todas as rotas utilizem o middleware logMiddleware
app.use(logMiddleware);

app.get("/", (req, res) => {
  //usando parâmetro passado por query string
  if (req.query.name) {
    return res.end(`Bem vindo, ${req.query.name}`);
  } else return res.end(`You have no power here.`);
});

app.get("/nome/:name", (req, res) => {
  //passando json como resposta
  return res.json({
    message: `Bem vindo, ${req.params.name}`
  });
});

app.listen(3000);

// use yarn start para iniciar o server com o nodemon
// acessar http://localhost:3000 no navegador para testar
