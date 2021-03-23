const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const users = ["Rakib", "Hridoy", "Arafat", "Baker", "Abul", "kabu", "Chabu"];
app.get("/", (req, res) => {
  res.send("I know how to run nodejs");
});

app.get("/name", (req, res) => {
  res.send({ name: "Rakib", age: 24, email: "rakib@gmail.com" });
});
app.get("/student", (req, res) => {
  res.send([
    { id: 201, name: "Rakib Hosen", batch: 45, bloogGroup: "O+" },
    { id: 202, name: "Emon", batch: 44, bloogGroup: "O-" },
    { id: 203, name: "Arafat", batch: 35, bloogGroup: "A+" },
    { id: 204, name: "Hridoy", batch: 44, bloogGroup: "B+" },
    { id: 205, name: "Rifat", batch: 42, bloogGroup: "AB+" },
    { id: 206, name: "Baker", batch: 40, bloogGroup: "B-" },
    { id: 207, name: "Ariful", batch: 41, bloogGroup: "AB+" },
    { id: 208, name: "Toto", batch: 45, bloogGroup: "B" },
  ]);
});

app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  const name = users[userId];
  res.send({ userId, name });
});

//post

app.post("/addUser", (req, res) => {
  //save to database
  const user = req.body;
  user.id = 55;
  res.send(user);
});

app.listen(3000, () => console.log("listening to port 3000"));
