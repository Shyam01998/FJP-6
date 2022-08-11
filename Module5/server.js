//require server
const express = require("express");

//you have to write it app signifies your server

const app = express();

//get karna he sayHello
app.get("/sayHello",function(req , res){
    res.send("Hello from Server");
})

//get karna he sayBye
app.get("/sayBye",function(req,res){
    res.send("Bye from server");
})

app.listen(3000,function(){
    console.log("Server started at port 3000")
})