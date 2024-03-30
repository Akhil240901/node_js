const express = require("express");
require("./config");
const Product = require("./products");

const app = express();
app.use(express.json());

app.get("/read/:key",async(req,resp)=>{
    let data=await Product.find({
          "$or":[
                {"bName":{$regex:req.params.key}},
                {"country":{$regex:req.params.key}}
          ]
    }) 
    console.log(req.params.key);
    resp.send(data);
})
app.listen(5000);
