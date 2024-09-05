const { timeStamp } = require('console')
const mongoose = require('mongoose')
const { type } = require('os')
const { Schema } = mongoose


const userSchema = new mongoose.Schema({
   name:{
    type:String,
    required:[true,'is required']
   },
   email:{
    type:String,
    required:[true,"email is required"],
    unique:true
   },
   password:{
    type:Sting,
    requires:[true,'password is rewuired']
   },
   },
{timeStamp:true})

const userModel= mnogoose.model('users',userSchema)
module.exports= userModel