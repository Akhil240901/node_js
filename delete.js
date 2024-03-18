const mongodbConnect=require('./mongoDB');

async function deleteDocument(){
    const data=await mongodbConnect();
    const result=await data.deleteMany({name:"SQL"})
    console.log(result);
}

deleteDocument(); 