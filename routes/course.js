const { Router } = require("express");
const CourseRoutes = Router();



CourseRoutes.post("/purchased", function(req, res){
    res.json({  message: "Your courses" 

    })
})
CourseRoutes.get("/purchases", function(req, res){
    res.json({  message: "courses your have "
    })
})

module.exports = {
    UserRoutes: CourseRoutes
}
