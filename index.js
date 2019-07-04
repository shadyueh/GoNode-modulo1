const express = require("express");
const nunjucks = require("nunjucks");

const app = express();

// template engine nunjucks
nunjucks.configure("views", {
  autoescape: true,
  express: app,
  watch: true
});

// define a extensão para o arquivo de templates
app.set("view engine", "njk");

//responde a requisição para '/'
app.get("/", (req, res) => {
  // renderizando uma view com nunjucks, passando parâmetros
  return res.render("form");
});

app.listen(3000);

// iniciar a app com yarn start (scripts em package.json já configurado)
// acessar http://localhost:3000 no navegador para testar
