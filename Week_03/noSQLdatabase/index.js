const express = require('express')
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://admin:7GSMtwzDLc8AX2BU@cluster0.h651m7z.mongodb.net/user_app")
.then(() => console.log("Connected to MongoDB (Database: user_app)"))
.catch(err => console.error("MongoDB connection error:", err));

const User = mongoose.model("User", {
    name: String,
    email: String,
    password: String
})

const app = express()
app.use(express.json())

app.post("/signup", async (req, res)=>{
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

    const existingUser = await User.findOne({email: email})
    
    if(existingUser){
        return res.status(400).send("username already exist")
    }

    const user = new User({
        name: name,
        email: email,
        password: password
    })

    user.save()
    res.json({
        msg: 'user created successfully'
    })

})

app.listen(3000)