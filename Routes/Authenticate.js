const authenticate=(req,res,next)=>{
     console.log("Request to delete data ",req.body.loginUser.isAdmin);
     if(req.body.loginUser.isAdmin)
      next();
     else
     {
         console.log("You do not have autority to delete the userr");
         res.json({result:false,payload:"Operation Denied"})
         return;
     }

     
}

module.exports=authenticate;