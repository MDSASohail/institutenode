// const model=require('mongoose');
// const userM=new model.Schema({
//     username:{type:String,require:true,unique:true},
//     password:{type:String,require:true,unique:true}
// },{timestamps:true});

// module.exports=model.model("username",userM);

const user=require('./Admin');
const route=require('express').Router();
route.post('/post',async(req,res)=>{
         const user=new user({username:req.body.username})
})