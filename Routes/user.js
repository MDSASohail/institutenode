const route=require('express').Router();
const userModel=require('../Models/user')
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

route.delete('/delete/',async(req,res)=>{
    console.log("Id is ",req.body);
     try {
        const data=await userModel.findByIdAndDelete(req.body.id);
        res.send("Data deleted");
        console.log(data);
     } catch (error) {
        res.send(error.message)
     }
})


route.post('/post',async(req,res)=>{
    const userData=new userModel({userId:req.body.userId,fullName:req.body.fullName});
    try {
        const savedData=await userData.save();
        res.json(savedData);
    } catch (error) {
        console.log(error.message);
        res.status(400).json(error.message)
    }
    
})


module.exports=route;