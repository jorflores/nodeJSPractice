const { NOTFOUND } = require("dns");
var http = require ("http");

var PORT = 3000;

var server = http.createServer(handleRequest);

function handleRequest(req,res) {

    // la url desde donde se hizo la peticion
    var path = req.url;

    switch(path) {

        case "/": 
        return displayRoot(path,req,res);

        default: 
        return NoEncontrado(path,req,res)
    }


}


function displayRoot(url,req,res){

var myHtml = `<html> 
              <body> 
              <h1>Home</h1>
              </body>
              </html> `

 res.writeHead(200, {"Content-Type": "text/html"});

  res.end(myHtml);

}


function NoEncontrado(url,req,res){

    var myHtml = `<html> 
                  <body> 
                  <h1>404 Not Found , sorry :(</h1>
                  </body>
                  </html> `
    
     res.writeHead(404, {"Content-Type": "text/html"});
    
      res.end(myHtml);
    
    }


server.listen(PORT,function(){
    console.log("Server UP");
})