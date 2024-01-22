const express=require('express')
const app=express()
const port=8080
const cors=require('cors')
app.use(cors())
app.get("/api",(req,res)=>{
    const users=[
        {message:"hello world"},
        {message:"test"}
    ]
    return res.json({users});
})
app.listen(port,()=>{console.log(`server start lestning on port ${port}`)})