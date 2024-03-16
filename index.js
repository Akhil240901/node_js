const {MongoClient}=require('mongodb');
const url='mongodb://localhost:27017';
const client=new MongoClient(url);
const database='akhil_store';

async function getDat(){
    const result=await client.connect();
    const db=result.db(database);
    const collection=db.collection('playlists');
    const response=await collection.find({}).toArray();
    console.log(response);
}

getDat();