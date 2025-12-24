const { adminModel, courseModel}= require("../db");

const express = require("express");
const { Router} = express;
const adminRouter = Router();


 
adminRouter.post("/signup", async function(req, res){
  const { email, password, firstName, lastName} = req.body;

  try{
    const existingAdmin = await adminModel.findOne({email: email});
    if(existingAdmin){
        return res.json({
            message: "Admin already exists"

        })
    }
    await adminModel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
    });
    
    return res.json({
        message: "Admin created successfully"
    })
  }  catch(e){
    return res.json({
        message: "Admin creation failed",

    })
  }

})

adminRouter.post("/signin", function(req, res){
    const { email,  password} = req.body;
    


});


adminRouter.use("/coursez", function (req, res){
    res.json({
        message: " Hello course "
    })
})

module.exports = {
    adminRouter: adminRouter
}