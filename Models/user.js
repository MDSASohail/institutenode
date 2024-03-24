const mongoose=require('mongoose');

const userSchemma=new mongoose.Schema({
    userId:{type:String,required:true,unique:true},
    fullName:{type:String,required:true}
},{timestamps:true})

module.exports=mongoose.model("userSchemma",userSchemma);