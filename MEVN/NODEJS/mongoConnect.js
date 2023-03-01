const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://127.0.0.1:27017/";

async function findOne() {

const client = await MongoClient.connect(url, { useNewUrlParser: true })

    .catch(err => { console.log(err); });

if (!client) {

    return;

}

try {


    const db = client.db("App");


    let collection = db.collection('users');


    let query ={"AppName": "Instagram"}


    let res = await collection.findOne(query);
console.log(res);

} catch (err) {

    console.log(err);

} finally {


    client.close();

}

}

findOne();