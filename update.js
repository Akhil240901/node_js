const dbConnect=require('./mongoDB');

const updateDocument= async()=>{
    const data= await dbConnect();
    const result=await data.updateMany({name:"SQL"},{$set:{
        active:false,
    }})
    console.log(result)
}

updateDocument();