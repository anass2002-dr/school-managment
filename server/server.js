const express=require('express')
const connectDB=require("./config/db");
const mongoose = require('mongoose');

connectDB()
const app=express()
const port=process.env.PORT || 8080
const cors=require('cors')
app.use(express.json());
app.use(cors())
// Drop the existing index
const UserStudent=new mongoose.Schema({
    cin:{
        type:String,
        require:true,
        unique:true,
    },
    student_name: {
        type: String,
        required: true,
        unique:true,
      },
    age:{
    type:Number,
    required:true,
    },
    level:{
        type:String,
        require:true,
    }
    ,
    classroom:{
        type:String,
        require:true,
    }

},
{
    timestamps: true,
}
)

const student = mongoose.model('Student', UserStudent); // <-- Corrected line

app.get("/api", (req, res) => {
    student.find({}).then((users) => {
        res.json(users);
    }).catch((err) => {
        console.log(err);
    });
});
app.post("/api/user",async(req,res)=>{
    const {cin,student_name,age,level,classroom}=req.body;
    const newStudent=new student({
        cin,student_name,age,level,classroom
    })
    // const studentsData=req.body
    // const insertedStudents = await student.insertMany(studentsData);
    // res.status(201).json({ message: 'Students inserted successfully', insertedStudents });
    

    newStudent.save()
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((error) => {
      if (error.code === 11000) {
        console.error('Duplicate key error:', error.message);
        // Handle the duplicate key error here (e.g., send an error response to the client)
        res.status(400).json({ error: 'Duplicate key error' });
      } else {
        console.error('Error:', error.message);
        // Handle other errors
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });
    
})
app.listen(port,()=>{console.log(`server start lestning on port ${port}`)})