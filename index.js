const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// define a simple GET endpoint
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my API, it is in progress yet !" });
});

app.get("/endpoint/", (req, res) => {
  res.json({ message: "Hola equipo no me banneen porfavor !" });
});

// define a simple POST endpoint
app.post("/", (req, res) => {
  const { name } = req.body;
  res.json({ message: `Hello, ${name}!` });
});

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
