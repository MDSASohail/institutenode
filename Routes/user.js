const route=require('express').Router();
const userModel=require('../Models/user');
const authenticate=require('./Authenticate');
route.get('/',async(req,res)=>{
    try {
        const data=await userModel.find();
        console.log(data);
        res.json(data);
    } catch (error) {
        console.log(error.message);
        res.status(400).json(error)
    }
})

route.get('/:id',async(req,res)=>{
    try {
        const data=await userModel.find({registrationNo:req.params.id});
        console.log(data);
        res.json(data);
    } catch (error) {
        console.log(error.message);
        res.status(400).json(error)
    }
})

route.delete('/delete/',authenticate,async(req,res)=>{
    console.log("Id is ",req.body);
     try {
        const data=await userModel.findByIdAndDelete(req.body.id);
        res.json({result:true,payload:"Data deleted successfully"});
        console.log(data);
     } catch (error) {
        res.send(error.message)
     }
})


route.post('/post',authenticate,async(req,res)=>{
    console.log(req.body)
    const userData=new userModel({registrationNo:req.body.registrationNo,fullName:req.body.fullName});
    try {
        const savedData=await userData.save();
        res.json({result:true,payload:savedData});
    } catch (error) {
        console.log(error.message);
        res.status(400).json(error.message)
    }
    // res.send("hello");
    
})


module.exports=route;