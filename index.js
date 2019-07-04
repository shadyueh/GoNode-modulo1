const express = require("express");
const nunjucks = require("nunjucks");

const app = express();

// template engine nunjucks
nunjucks.configure("views", {
  autoescape: true,
  express: app,
  watch: true
});

// express manuseia as informações vinda no form
app.use(express.urlencoded({ extended: false }));

// define a extensão para o arquivo de templates
app.set("view engine", "njk");

// responde a requisição para '/'
app.get("/", (req, res) => {
  // renderizando uma view com nunjucks, passando parâmetros
  return res.render("form");
});

// responde a requisição para '/'
app.post("/check", (req, res) => {
  // captura parâmetro vindo no corpo da requisição '/'
  let age = parseInt(req.body.age, 10);
  // tratamento solicitado no desafio
  let path = "minor";
  if (age > 18) {
    path = "major";
  }
  // redirecionamento conforme tratamento
  return res.redirect(`/${path}?age=` + age);
});

app.listen(3000);

// iniciar a app com yarn start (scripts em package.json já configurado)
// acessar http://localhost:3000 no navegador para testar
