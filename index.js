const express=require('express');
const app=express();

app.get('',(req,res)=>{
    res.send('Welcome ,to my home page');
});

app.get('/about',(req,res)=>{
    res.send('welcome ,to my about page');
});

app.listen(5000);