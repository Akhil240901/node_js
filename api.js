const express=require('express');
const dbConnect=require('./mongoDB');
const app=express();

app.use(express.json());

app.get('/',async(req,resp)=>{
    let data=await dbConnect();
    data=await data.find().toArray();
    console.log(data);
    resp.send(data);
})
 
app.post('/',async(req,resp)=>{
    let data=await dbConnect();
    let result=await data.insertMany(req.body);
    resp.send(result);
    //console.log(req.body);
})

app.put('/name',async(req,resp)=>{
    let data=await dbConnect();
    let result=await data.updateOne({name:req.body.name},
    {$set:req.body}) 
    resp.send(req.body);
})
app.listen(5000);