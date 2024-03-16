const mongodbConnect = require('./mongoDB.js');
const insertDocument=async ()=>{
    const db=await mongodbConnect();
    const result=await db.insertOne({name:"C#",ctype:"programming",videos:4,author:"Akhil Bisen"});
    console.log(result);
}
insertDocument();