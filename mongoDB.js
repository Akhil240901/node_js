const {MongoClient}=require('mongodb');
const url='mongodb://localhost:27017';
const client=new MongoClient(url);
const database='akhil_store';

async function mongodbConnect(){
    const result=await client.connect();
    const db=result.db(database);
    return db.collection('playlists');
}


module.exports=mongodbConnect;