const mongobg=require('mongoose');
const userDetail=new mongobg.Schema({
    userId:{type:String,required:true,unique:true},
    rollNo:{type:String},
    fatherName:{type:String},
    degree:{type:String},
    duration:{type:Array},
    grade:{type:String},
    center:{type:String},
    issueDate:{type:Date},
    motherName:{type:String},
    totalMarks:{type:Number},
    percentage:{type:Number},
    result:{type:String},
    subjects:{type:Array}

},{timestamps:true});

module.exports=mongobg.model("userD",userDetail);