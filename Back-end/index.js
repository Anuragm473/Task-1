const express=require("express")
const app=express()
const bodyParser=require('body-parser')
const User=require('./modal')
const cors=require('cors')
app.use(bodyParser.json())
require('dotenv').config();
app.use(cors())

app.post("/register",async (req,res)=>{
    try{
    const {username,email,password}=req.body
    const data=await User.create({username,email,password})
    res.json({
        success:'Ok',
        users:data
    })
    }catch(err){
        res.json({
            error:err.message
        })
    }
})

app.patch('/forget',async (req,res)=>{
    const {email,password}=req.body
    const data=await User.findOneAndUpdate({"email":email},{"password":password})
    res.json({
        message:'updated'
    })
})

app.post('/login',async(req,res)=>{
    const {username,password}=req.body
    const data=await User.findOne({username})
    if(data.password==password){
        res.json({
            login:'success'
        })
    }else{
        res.json({
            login:'unsuccess'
        })
    }
})

app.listen(process.env.PORT,()=>{console.log("server running on port:5000")})
