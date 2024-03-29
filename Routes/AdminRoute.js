const route=require("express").Router();
const adminScheema=require('../Models/Admin');
const cryptoJs=require('crypto-js')
route.post('/post',async(req,res)=>{
      const h=cryptoJs.AES.encrypt(req.body.password,process.env.pKey).toString();
      const admin= new adminScheema({username:req.body.username,password:h,isAdmin:req.body.isAdmin});
      try {
              const savedData=await admin.save();
              res.json(savedData)
      } catch (error) {
                  res.send(error)
      }
})

route.post('/get/',async(req,res)=>{
    console.log("Fetching user")
       try {
                const user=await adminScheema.findOne({username:req.body.username});
                console.log("User is ",user)
                if(user==null)
                {
                     console.log("Invalid user")
                     res.json({status:false,payload:"Invalid username",data:null})
                     return;
                }
                const decPassword=cryptoJs.AES.decrypt(user.password,process.env.pKey).toString(cryptoJs.enc.Utf8);
                 console.log("decrept passwor is ",decPassword,req.body.password)
                if(decPassword==req.body.password)
                {
                     console.log("User found",user)
                     res.json({status:true,payload:"Login Succes",data:user})
                }
                else
                {
                     res.json({status:false,payload:"Password Incorrect",data:null})
                     console.log("Incorrect passord")
                }

       } catch (error) {
              console.log("Error is",error.message)
               res.send(error);
       }
})


module.exports=route;