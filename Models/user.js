const mongoose=require('mongoose');

const userSchemma=new mongoose.Schema({
    registrationNo:{type:String,required:true,unique:true},
    fullName:{type:String,required:true}
},{timestamps:true})

module.exports=mongoose.model("userAccounts",userSchemma);