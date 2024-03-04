const express=require('express');
const app=express();

app.get('',(req,res)=>{
    console.log("Hey welcome ",req.query.name);
    res.send('Welcome ,to my home page',+req.query.name);
});

app.get('/about',(req,res)=>{
    res.send('welcome ,to my about page');
});

app.listen(5000);