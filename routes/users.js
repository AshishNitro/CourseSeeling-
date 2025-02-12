const { Router } = require("express");
const UserRoutes = Router();

UserRoutes.post("./signup", function(req, res){
    res.json({message: "Yor are signed"

    })
})
UserRoutes.post("./signin", function(req, res){
    res.json({  message: "Welcome" 

    })
})
UserRoutes.get("./purchases", function(req, res){
    res.json({  message: "courses your have "
    })
})

module.exports = {
    UserRoutes: UserRoutes
}
