// Importar modulo HTTP

var http = require("http");
var PORT = 7000;
var PORT_TWO = 7500;

var server = http.createServer(handleRequest);
var server_two = http.createServer(handleRequest_two);

function handleRequest(request, response)  {
    response.end("Bienvenido al servidor 1: " + request.url);
}

function handleRequest_two(request, response)  {
    response.end("Bienvenido al servidor 2 : " + request.url);
}

server.listen(PORT,function() {
    console.log("Servidor escuchando en puerto: " + PORT);
})

server_two.listen(PORT_TWO,function() {
    console.log("Servidor escuchando en puerto: " + PORT_TWO);
})