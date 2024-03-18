const mongoConnect=require('./mongoDB');

async function main(){
    const result=await mongoConnect();
    const response=await result.find({name:"mongodb"}).toArray(); 
    console.log(response);
}
main();