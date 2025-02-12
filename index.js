const express =  require("express");
const { UserRoutes } = require("./routes/users");
const { CourseRoutes } = require("./routes/course");



const app = express();
app.use("/api/v1/users",UserRoutes);
app.use("/api/v1/course",CourseRoutes);


creatUserRoutes(app);
creatCourseRoutes(app);



app.listen(2000);

