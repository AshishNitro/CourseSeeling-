const express = require("express");
const { Router} = express;
const adminRouter = Router();
const { adminModel}= require("../db");


 
adminRouter.post("/signup", function(req, res){
    res.json({
        message: "admin Your are Singup "
    })
})

adminRouter.post("/signin", function(req, res){
    req.json({
        message: " admin Hello Welcome"
    })
})
adminRouter.use("/coursez", function (req, res){
    res.json({
        message: " Hello course "
    })
})

module.exports = {
    adminRouter: adminRouter
}