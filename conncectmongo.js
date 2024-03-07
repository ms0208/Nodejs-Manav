const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

async function getdata()
{
    let result = await client.connect();
    let db = result.db("Hackathon");
    let  collection = db.collection("donation");
    let data = await collection.find({}).toArray();
    console.log(data);
}
getdata();