const express = require("express");
const userRouter = express.Router();
const {protectRoute} = require("../controller/authController")

const {
    profileController,
    getAllUsersController,
} = require("../controller/userController")

userRouter.get("/users",protectRoute, getAllUsersController)

userRouter.get("/user",protectRoute , profileController)

module.exports = userRouter;