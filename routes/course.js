const express = require("express");
const { Router} = express;
const courseRouter = Router();

courseRouter.post("/purchase", function(req, res){
    res.json({
        message: "Your purchase"
    })
})

courseRouter.get("/preview", function(req, res){
    res.json({
        message: "You course preview"
    })
})

module.exports ={
    courseRouter: courseRouter
}