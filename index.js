const express = require("express");
const mongoose = require("mongoose");


const app = express();


const { userRouter} = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");





app.use(".user", userRouter)
app.use("/course", courseRouter)
app.use("/admin", adminRouter);
 

async function main(){
    await mongoose.connect("mongodb+srv://ashishnitro5:aS1ntL7Bat3hmdh8@cluster0.ldjsp.mongodb.net/coursera-app");
    app.listen(3005);

}
main();






