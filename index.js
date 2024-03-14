const path=require('path');
const express=require('express');
const app=express();

const pubPath=path.join(__dirname,'public');
//app.use(express.static(pubPath));
app.set('view engine','ejs')
app.get('',(req,resp)=>{
    resp.sendFile(`${pubPath}/index.html`)
})
app.get('/about',(req,resp)=>{
    resp.sendFile(`${pubPath}/about.html`)
})

app.get('/profile',(req,resp)=>{
    const user={
        name:"akhil bisen",
        city:"gondia",
        email:"bisenakhl465@fmail.com",
        skills:["java","node","react","c","php"],
    }
    resp.render('profile',{user})
})

app.get("/login",(req,resp)=>{
    resp.render('login');
})
app.listen(5000);

