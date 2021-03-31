const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'fruitsdb';

// Create a new MongoClient
const client = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true});

// Use connect method to connect to the Server
client.connect(function(err){
  assert.strictEqual(null, err);
  console.log("connected sucessfully to the server");

  const db = client.db(dbName);

  insertDocuments(db, function(){
    client.close();
  });
});

const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('fruits');
  // Insert some documents
  collection.insertMany([
    {
      name: "Apple",
      score: 8,
      review: "Sweet and crisp"
    },
    {
      name: "Orange",
      score: 7,
      review: "Kind of sour"
    },
    {
      name: "Banana",
      score: 9,
      review: "Yummy and soft"
    },
  ], function(err, result){
    assert.strictEqual(err, null);
    assert.strictEqual(3, result.result.n);
    assert.strictEqual(3, result.ops.length);
    console.log("Inserted 3 documents into the collection.");
    callback(result);
  });
}