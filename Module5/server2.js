const express = require("express");
const app = express();


//case :1

// app.get("/simple",function(req,res){
//     res.send("Simple output 1")
// })

// app.get("/simple",function(req,res){
//     res.send("Simple output 2")
// })

// app.get("/simple",function(req,res){
//     res.send("Simple output 3")
// })

//case 2

// app.use(function(req,res){
//     res.send("Use will always run");
// })

// app.get("/simple",function(req,res){
//     res.send("get will run")
// })

// app.post("/simple",function(req,res){
//     res.send("post will run")
// })

// app.patch("/simple",function(req,res){
//     res.send("patch will run")
// })

// app.delete("/simple",function(req,res){
//     res.send("delete will run")
// })

// case 3
// Middleware ->Middleman
//User defined middleman -> next call

app.use(function(req,res,next){
    console.log("Use will always run");
    next();
})

app.post("/simple",function(req,res){
    res.send("Hello from post")
})







app.listen(3000,function(){
    console.log("Server is started at 3000")
})