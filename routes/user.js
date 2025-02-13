const express = require("express");
const { Router} = express;
const userRouter = Router();

 
userRouter.post("/signup", function(req, res){
    res.json({
        message: "Your are Singup "
    })
})

userRouter.post("/signin", function(req, res){
    req.json({
        message: " Hello Welcome"
    })
})
userRouter.get("/purchases", function(req, res){
    res.json({
        message: " Your purchases"
    })
})


module.exports = {
    userRouter: userRouter
}