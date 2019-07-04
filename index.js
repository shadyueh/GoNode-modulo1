const express = require("express");
const nunjucks = require("nunjucks");
const path = require("path");

const app = express();

// template engine nunjucks
nunjucks.configure("views", {
  autoescape: true,
  express: app,
  watch: true
});

// express manuseia as informações vinda no form
app.use(express.urlencoded({ extended: false }));

// express static para entregar arquivos diretament
// path.resolve para tratar os path slashes
app.use(express.static(path.resolve(__dirname, "css")));

// define a extensão para o arquivo de templates
app.set("view engine", "njk");

// interceptador (middleware)
const checkAgeParam = (req, res, next) => {
  console.log(
    `URL: ${req.url} | METHOD: ${req.method} | AGE: ${req.query.age}`
  );
  if (isNaN(req.query.age)) {
    return res.redirect("/");
  } else {
    return next(); //evita o bloqueio do fluxo da requisição
  }
};

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

// responde a requisição para '/major'
app.get("/major", checkAgeParam, (req, res) => {
  return res.render("age_check", {
    message: `Você é maior de idade e possui ${req.query.age} anos.`
  });
});

// responde a requisição para '/minor'
app.get("/minor", checkAgeParam, (req, res) => {
  return res.render("age_check", {
    message: `Você é menor de idade e possui ${req.query.age} anos.`
  });
});

app.listen(3000);

// iniciar a app com yarn start (scripts em package.json já configurado)
// acessar http://localhost:3000 no navegador para testar
