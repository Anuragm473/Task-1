const mongoose=require("mongoose")
require('dotenv').config();
mongoose.connect(process.env.DATABASE_URL)

const UserSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})
const User=mongoose.model('User',UserSchema)
module.exports=User