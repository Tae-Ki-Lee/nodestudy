const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Person = require("./person-model");

mongoose.set("strictQuery", false);

const app = express();
app.use(bodyParser.json());
app.listen(3000, async () => {
  console.log("server started");
  const mongodbUri = "mongodb+srv://Tae:0809@cluster0.hapf2bc.mongodb.net/test?retryWrites=true&w=majority";
  mongoose.connect(mongodbUri).then(console.log("DB에 연결 성공"));
})

app.get("/person", async (req, res) => {
  const person = await Person.find();
  res.send(person);
})
app.get("/person/:email", async (req, res) => {
  const person = await Person.find({ email: req.params.email });
  res.send(person);
})
app.post("/person", async (req, res) => {
  const person = new Person(req.body);
  await person.save();
  res.send(person); n
})
app.put("/person/:email", async (req, res) => {
  const person = await Person.findOneAndUpdate(
    { email: req.params.email },
    { $set: req.body },
    { new: true }
  );
  console.log(person);
  res.send(person);
})
app.delete("/person/:email", async (req, res) => {
  await Person.deleteMany({ email: req.params.email });
  res.send({ success: true });
})