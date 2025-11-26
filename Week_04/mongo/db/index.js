const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://admin:7GSMtwzDLc8AX2BU@cluster0.h651m7z.mongodb.net/courses")
.then(() => console.log("Connected to MongoDB (Database: courses)"))
.catch(err => console.error("MongoDB connection error:", err));

//define schemas
const AdminSchema = new mongoose.Schema({
    username: String,
    password: String
})

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Courses'
    }]
})

const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    imageLink: String,
    price: Number
})


const Admin = mongoose.model('Admin', AdminSchema)
const User = mongoose.model('User', UserSchema)
const Course = mongoose.model('Course', CourseSchema)


module.exports = {
    Admin,
    User,
    Course
}