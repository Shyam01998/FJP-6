const userModel = require("../model/userModel");

async function getAllUsersController(req,res){
    try{
        let user = await userModel.find();
        res.json(user);
    }catch(err){
        res.send(err.message);
    }
}

async function profileController(req,res){
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
}

module.exports = {
    getAllUsersController:getAllUsersController,
    profileController:profileController
}