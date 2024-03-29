const mongo=require('mongoose');
const admin=new mongo.Schema({
     username:{type:String,required:true,unique:true},
     password:{type:String,required:true},
     isAdmin:{type:Boolean,required:true}
},{timestamps:true});
module.exports=mongo.model("AdminInstitute",admin);