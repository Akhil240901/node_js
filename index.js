const path=require('path');
const express=require('express');
const app=express();

const pubPath=path.join(__dirname,'public');
//app.use(express.static(pubPath));
app.get('',(req,resp)=>{
    resp.sendFile(`${pubPath}/index.html`)
})
app.get('about',(req,resp)=>{
    resp.sendFile(`&{pubPath}/about.html`)
})
app.listen(5000);

