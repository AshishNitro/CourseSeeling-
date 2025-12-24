const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const onbjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
    email:{ type: String, unique: true},
    password: String,
    firstName: String,
    lastName: String,

    
    
    })
    
    const  adminSchema = new Schema({
        email:{ type: String, unique: true},
        password: String,
        firstName: String,
        lastName: String,
    })


const courseSchema = new Schema({
    email:{ type: String, unique: true},
    password: String,
    firstName: String,
    lastName: String,

})
const purchaseSchema = new Schema({
    email:{ type: String, unique: true},
    password: String,
    firstName: String,
    lastName: String,

})

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);


module.exports = {
    // Schemas
    purchaseSchema,
    courseSchema,
    adminSchema,
    userSchema,
    // Models
    purchaseModel,
    courseModel,
    adminModel,
    userModel,
}
