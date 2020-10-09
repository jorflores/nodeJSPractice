// Importar modulo HTTP

var http = require("http");
var PORT = 3001;

var server = http.createServer(handleRequest);

function handleRequest(request, response)  {
    response.end("Bienvenido: " + request.url);
}

server.listen(PORT,function() {
    console.log("Servidor escuchando en puerto: " + PORT);
})