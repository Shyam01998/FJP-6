const  express = require("express")

const app = express();

app.use(express.json());

const userModel = require("./userModel");

//sign up
//input
//password
//confirmPassword
//phone
//address
//email
//pic

app.post("/signup",async function(req,res){
   try{ let data = req.body;
    console.log(data);

    let newUser =await userModel.create(data);
    res.json({
        message:"data received",
        
    })}
    catch(err){
    res.send(err.message)
   }
})




app.listen(3000,function(){
    console.log("server started at 3000");
}) 