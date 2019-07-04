const http = require("http");

http
  .createServer((req, res) => {
    console.log(req); //imprime a requisição
    return res.end("Hello Node"); //responde a requisição
  })
  .listen(3000);

// iniciar a app com yarn start (scripts em package.json já configurado)
// acessar http://localhost:3000 no navegador para testar
