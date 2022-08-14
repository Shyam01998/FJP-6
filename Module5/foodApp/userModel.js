

//tech knowledge
//(scheme) -> set of features and rules a certain entity should follow
const mongoose = require('mongoose')

let dbLink =  `mongodb+srv://dbUser:b2sLsffHdLb3R4DR@cluster0.imp4y9w.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(dbLink).then(function(){
    console.log("connected");
}).catch(function(err){
    console.log("error",err);
})