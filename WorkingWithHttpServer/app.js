var http = require('http');

//createServer = abre o servidor http
//listen = qual porta de rede quero abrir o servidor

http.createServer(function (req, res) {
  res.end("Hello World! Welcome to my website");
}).listen(8081);

console.log("O servidor esta rodando!");
