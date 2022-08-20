const  express = require("express")

//npm i cookie-parser
const cookieParser = require("cookie-parser");

//npm i jsonwebtoken
var jwt = require('jsonwebtoken');
const secretKey = "ghghjghjhujkuilkjk,"

const app = express();

app.use(express.json());
app.use(cookieParser());



const userModel = require("./userModel");

//sign up
//name
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


app.post("/login",async function(req,res){
    try{
        let data = req.body;
        // console.log(data)
        let {email,password} = data;
        if(email && password){
            let user = await userModel.findOne({email:email});
            console.log(user);
            if(user){
                if(user.password == password){
                    //create JWT payload,secret key ,algo by default -> SHA56
                    const token = jwt.sign({ data: user['_id'] }, secretKey);
                    console.log(token);
                    //put token into cookies
                    res.cookie("JWT",token);
                    res.send("User logged in");
                }else{
                    res.send("Email or Password does not match");
                }
            }else{
                res.send("User with this email does not exist. Kindly sign up");
            }
        }else{
            res.send("kindly enter email and password both");
        }
    }catch(err){
        console.log(err.message);

    }
})

app.patch("/forgetPassword",async function(req,res){
    try{
        let {email} = req.body;
        let afterFiveMin = Date.now() + 1000*60*5;
        let otp = otpGenerator();
        //mail ke basis par search
        //by default -> findAndUpdate -> not updated send document 
        //new = true -> will get updated doc
        let user = await userModel.findOneAndUpdate({email:email},{otp:otp,otpExpire:afterFiveMin},{new:true});
        console.log(user);
        res.json({
            data:user,
            "message":"Otp send to your mail"
        })
    }catch(err){
        res.send(err.message);
    }
})

app.patch("/resetPassword", async function(req,res){
    try{
        let {otp,password,confirmPassword,email} = req.body;
        let user = await userModel.findOne({email});
        let currentTime = Date.now();
        if(currentTime>user.otpExpire){
            delete user.otp;
            delete user.otpExpire;
            await user.save();
            res.json({
                message:"OTP Expired"
            })
        }else{
            if(user.otp != otp){
                res.json({
                    message:"OTP does not match"
                })
            }else{
                user = await userModel.findOneAndUpdate({otp},{password,confirmPassword},{runValidators:true,new:true});
                delete user.otp;
                delete user.otpExpire;
                await user.save();

                res.json({
                    user:user,
                    message:"user password reset complete"
                })
            }
        }
        //key delte -> get the document obj -> modify that object by removing useless keys
        //save this doc in db

    }catch(err){
        res.send(err.message);
    }
})

function otpGenerator(){
    return Math.floor(Math.random()*1000000);
}

app.get("/users",protectRoute, async function(req,res){
    try{
        let user = await userModel.find();
        res.json(user);
    }catch(err){
        res.send(err.message);
    }
})

app.get("/user",protectRoute ,async function (req,res){
    try{
        const userId = req.userId;
        const user = await userModel.findById(userId);
        //to send json data
        res.json({
            data:user,
            message:"Data about logged in user is send"
        }) 
    }catch(err){
        res.send(err.message);
    }
})

function protectRoute(req,res,next){
    try{
        let cookies = req.cookies;
        let JWT = cookies.JWT;
        if(cookies.JWT){
            const token = jwt.verify(JWT,secretKey) ;
            console.log(token);
            let userId = token.data;
            req.userId = userId;
            next();
        }else{
            res.send("You are not logged in.Kindly login");
        }
    }catch(err){

    }
}




app.listen(3000,function(){
    console.log("server started at 3000");
}) 