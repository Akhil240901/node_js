const express = require("express");
require("./config");
const Product = require("./products");

const app = express();
app.use(express.json());

app.post("/create", async (req, resp) => {
  let data = new Product(req.body);
  let result = await data.save();
  console.log(result);
  resp.send(result);
});

app.get("/list/:_id", async (req, resp) => {
  let data = await Product.find(req.params);
  console.log(data);
  resp.send(data);
});

app.put("/update/:_id", async (req, resp) => {
  let data = await Product.updateOne(req.params,
    {
       $set: req.body,
    }
  );
  resp.send(data);
});

app.delete("/delete/:_id",async(req,resp)=>{
    let data=await Product.deleteOne(req.params);
    resp.send(data);
    console.log(data);
})
app.listen(5000);
