const express =  require("express");
const { creatUserRoutes } = require("./routes/users");
const { creatCourseRoutes } = require("./routes/course");


const app = express();
app.use("/user",UserRoutes);
app.use("/course",CourseRoutes);


creatUserRoutes(app);
creatCourseRoutes(app);



app.listen(2000);

