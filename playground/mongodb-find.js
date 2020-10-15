// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("Unable to Connect to the MongoDB Server");
  }
  console.log("Connected to MongoDB Server");
  const db = client.db("TodoApp");

  // db.collection("Todos")
  //   .find({ _id: new ObjectID("5f884ef2ed85d215f0f29de0") })
  //   .toArray()
  //   .then(
  //     (docs) => {
  //       console.log("Todos");
  //       console.log(JSON.stringify(docs, undefined, 2));
  //     },
  //     (err) => {
  //       if (err) {
  //         console.log(" Unable to feth Todos ", JSON.stringify(err));
  //       }
  //     }
  //   );

  db.collection("Todos")
    .find()
    .count()
    .then(
      (count) => {
        console.log(`Todos Count: ${count}`);
      },
      (err) => {
        if (err) {
          console.log(" Unable to feth Todos ", JSON.stringify(err));
        }
      }
    );

  // client.close();
});
