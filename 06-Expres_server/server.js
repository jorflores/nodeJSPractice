var express = require("express");

var app  = express();
var PORT = 3000;

app.get("/", function(req,res){

    res.send("Welcome to Express")
})

app.listen(PORT,()=>{
    console.log("Server on port :" + PORT);
})