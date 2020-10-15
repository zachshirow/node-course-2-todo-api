// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("Unable to Connect to the MongoDB Server");
  }
  console.log("Connected to MongoDB Server");
  const db = client.db("TodoApp");

  //deleteMany
  // db.collection("Todos")
  //   .deleteMany({
  //     text: "eat lunch",
  //   })
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((err) => console.log(err));

  //deleteOne
  // db.collection("Todos")
  //   .deleteOne({
  //     text: "eat lunch",
  //   })
  //   .then((res) => console.log(res))
  //   .catch((err) => console.log(err));

  //findOneAndDelete
  db.collection("Todos")
    .findOneAndDelete({
      completed: false,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  // client.close();
});
