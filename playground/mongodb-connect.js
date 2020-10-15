// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("Unable to Connect to the MongoDB Server");
  }
  console.log("Connected to MongoDB Server");
  const db = client.db("TodoApp");

  //   db.collection("Todos").insertOne(
  //     {
  //       text: "Something to Do",
  //       completed: false,
  //     },
  //     (err, result) => {
  //       if (err) {
  //         return console.log("Unable to Insert To Do", err);
  //       }
  //       console.log(JSON.stringify(result.ops, undefined, 2));
  //     }
  //   );
  //insrt new doc into users (name, age, location)
  //   db.collection("Users").insertOne(
  //     {
  //       name: "ShirowTama",
  //       age: 20,
  //       location: "Japan",
  //     },
  //     (err, result) => {
  //       if (err) {
  //         return console.log("Unable to insert into Users", JSON.stringify(err));
  //       }
  //       console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
  //     }
  //   );

  client.close();
});
