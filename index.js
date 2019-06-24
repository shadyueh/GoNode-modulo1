const express = require("express");
const nunjucks = require("nunjucks");

const app = express();

// template engine nunjucks
nunjucks.configure("views", {
  autoescape: true,
  express: app,
  watch: true
});

// configura a extensão para o arquivo de templates
app.set("view engine", "njk");

// renderizando uma view com nunjucks, passando parâmetros
app.get("/", (req, res) => {
  return res.render("list", { name: "Diego" });
});

app.listen(3000);

// use yarn start para iniciar o server com o nodemon
// acessar http://localhost:3000 no navegador para testar
