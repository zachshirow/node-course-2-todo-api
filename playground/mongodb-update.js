// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {


  if (err) {
    return console.log("Unable to Connect to the MongoDB Server");
  }
  console.log("Connected to MongoDB Server");
  const db = client.db("TodoApp");

  // db.collection("Todos").findOneAndUpdate({
  //   _id: new ObjectID("5f887799faabe370a1f286e5")
  // }, {
  //   $set: {
  //     completed: false,
  //   }
  // }, {
  //   returnOriginal:false,
  // }).then(res => console.log(res))

  db.collection('Users').findOneAndUpdate({name: "ShirowTama"}, {
    $inc: {
      age: 1,
    }
  }, {
    returnOriginal: false
  }).then(res => console.log(res))
  
  
  
  
  // client.close();
});
