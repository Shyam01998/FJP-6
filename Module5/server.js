//require server
const express = require("express");

//you have to write it app signifies your server

const app = express();

//get karna he data from  sayHello
app.get("/sayHello",function(req , res){
    res.send("Hello from Server");
})

//get karna he data from say
app.get("/say",function(req,res){
    res.send("HomePage")
})

//get karna he data fromm    sayBye
app.get("/sayBye",function(req,res){
    res.send("Bye from server");
})

app.get("/getMultiply/:num1/:num2",function(req,res){
    console.log(req.params);
    let num1 = req.params.num1;
    let num2 = req.params.num2;
    let mul = num1*num2;

    res.end("Multiply of params are "+mul)
})



app.listen(3000,function(){
    console.log("Server started at port 3000")
})