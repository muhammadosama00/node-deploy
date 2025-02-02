const express = require("express");
const app = express();
const db = require("./db");
const Person = require("./models/Person");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Welcome to my hotel, how can i help you?");
});

app.post("/person", async (req, res) => {
  try {
    const data = req.body;

    const newPerson = new Person(data);

    const response = await newPerson.save();

    console.log("data save successfully.");
    res.status(200).json(response);
  } catch (err) {
    console.log("Error saving data: ", err);
    res.status(500).json({ error: "Internal server error." });
  }
});

app.get("/person", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("Data Fetched!");
    res.status(200).json(data);
  } catch (err) {
    console.log("Error saving data: ", err);
    res.status(500).json({ error: "Internal server error." });
  }
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
