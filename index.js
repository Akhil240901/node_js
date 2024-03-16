const mongoConnect=require('./mongoDB.js');

async function main(){
    const result=await mongoConnect();
    //console.log(result); //will show all document
    const data=await result.find({"name":SQL}).toArray();
    console.log(data);
}

main();