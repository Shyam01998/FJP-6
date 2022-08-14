//require server
const express = require("express");

//you have to write it app signifies your server

const app = express();

let user;

//get karna he data from  sayHello
app.get("/sayHello",function(req,res){
    res.send("Hello from server")
})

// //get karna he data from say
// app.get("/say",function(req,res){
//     res.send("HomePage")
// })

// //get karna he data fromm    sayBye
// app.get("/sayBye",function(req,res){
//     res.send("Bye from server");
// })

// app.get("/getMultiply/:num1/:num2",function(req,res){
//     console.log(req.params);
//     let num1 = req.params.num1;
//     let num2 = req.params.num2;
//     let mul = num1*num2;

//     res.end("Multiply of params are "+mul)
// })

//get
app.get("/sayHello",function(req,res){
        res.json({
        user:user
    })
})

//post 
app.post("/sayHello",function(req,res){
    user = req.body;
    res.json({
        message:"Data recieved Successfully",
        user:user
    })
})

//Patch
app.patch("/sayHello",function(req,res){
    dataTOUpdate = req.body
    for(key in dataTOUpdate[key]){
        user[key] = dataTOUpdate[key];
    }
    req.json({
        message:"Data updated",
        user:user   
    })
})

//Delete
app.delete("/sayHello",function(req,res){
    user = {};
    res.json({
        message:"Deletion done",
        user:user
    })
})



app.listen(3000,function(){
    console.log("Server started at port 3000")
})