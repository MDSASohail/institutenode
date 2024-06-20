const express=require('express');
const app=express();
const routeUser=require('./Routes/user');
const routeUserDetail=require('./Routes/userDetail');
const adminRoute=require('./Routes/AdminRoute');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    next();
  });
async function connect()
{
     try {
        await mongoose.connect(process.env.mongo_pass)
        console.log("Connected to server successfully");
     } catch (error) {
        console.log(error.message)
     }
}

connect()
app.use('/user',routeUser);
app.use('/userDetail',routeUserDetail);
app.use('/admin',adminRoute);
app.get('/',(req,res)=>{
    res.send("Hello");
})

app.get('*',(req,res)=>{
    res.send("Working fine");
})

app.listen(8000,()=>{
    console.log("Server started at 8000")
})