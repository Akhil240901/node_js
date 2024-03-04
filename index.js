const path=require('path');
const express=require('express');
const app=express();

const pubPath=path.join(__dirname,'public');
app.use(express.static(pubPath));

app.listen(5000);

