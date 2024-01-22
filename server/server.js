const express=require('express')
const connectDB=require("./config/db");
const mongoose = require('mongoose');

connectDB()
const app=express()
const port=process.env.PORT || 8080
const cors=require('cors')
app.use(express.json());
app.use(cors())

const UserSchema=new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        unique: true,
      },
    last_name: {
    type: String,
    required: true,
    },
    age:{
    type:Number,
    required:true,

    }
})
const User = mongoose.model('User', UserSchema); // <-- Corrected line
// ...
app.get("/api", (req, res) => {
    User.find({}).then((users) => {
        res.json(users);
    }).catch((err) => {
        console.log(err);
    });
});
app.post("/api/users",(req,res)=>{
    const {first_name,last_name,age}=req.body;
    const newUser=new User({
        first_name,last_name,age
    })
    newUser.save().then((user)=>{
        res.status(201).json(user);
    }).catch((err)=>{
        console.log(err)
        res.status(500).send("Internal Server Error");

    })
    
})
app.listen(port,()=>{console.log(`server start lestning on port ${port}`)})