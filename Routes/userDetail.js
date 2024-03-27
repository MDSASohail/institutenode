const route=require("express").Router();
const userDetail=require("../Models/Detail");
route.post('/',async(req,res)=>{
    console.log(req.body)
         const userData=new userDetail({
            userId:req.body.userId,
            rollNo:req.body.rollNo,
            fatherName:req.body.fatherName,
            degree:req.body.degree,
            duration:req.body.duration,
            grade:req.body.grade,
            center:req.body.center,
            issueDate:req.body.issueDate,
            motherName:req.body.motherName,
            totalMarks:req.body.totalMarks,
            percentage:req.body.percentage,
            result:req.body.result,
            subjects:req.body.form

         })

        try {
              const data=await userData.save();
              console.log("Data Saved on server",data);
              res.send(data);
        } catch (error) {
            console.log("Error in Backend in saving data",error.message)
            res.status(400).send(error.message);
        }
})

route.get('/:id',async(req,res)=>{
    //   const url=req.path;
    //  console.log("URL is ",req.params.id);
    //  res.send("Hello");


    try {
         const data=await userDetail.findOne({userId:req.params.id});
         console.log(data);
         res.send(data);
    } catch (error) {
        console.log("Error in node in fetching data");
    }
})

route.put('/',async(req,res)=>{
      console.log("To update ",req.body)
      try {
          
          const data=await userDetail.updateOne({userId:req.body.userId},{
            $set:req.body
          },{new:true})


          await userDetail.updateOne({userId:req.body.userId},{
            $set:{subjects:req.body.form}
          })

          res.send(data);
          console.log("Updated data is ",data);
      } catch (error) {
        console.log("Error in updateing",error.message);
          res.status(400).send(error);
      }
})

module.exports=route;