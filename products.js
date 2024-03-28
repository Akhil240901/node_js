const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    bName:String,
    prize:Number,
    country:String,
    series:String,
})

module.exports=mongoose.model('products',productSchema);