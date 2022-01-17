const express = require("express");
const connectDB = require("./DB/Connection");
var bodyParser = require("body-parser");
const app = express();
var jsonParser = bodyParser.json();

connectDB();
app.use(express.json({ extended: false }));
app.use("/api/userModel", require("./api/user"));
const Port = process.env.Port || 3000;

//app.listen(Port, () => console.log("Server staeted"));

app.get("/api/userModel", function (req, res) {
  res.send("Hello World!"); // This will serve your request to '/'.
});

// app.post("/api/userModel", jsonParser, function (req, res) {
//   res.send(req.body); // This will serve your request to '/'.
//   console.log(req.body);
// });

app.listen(Port, function () {
  console.log("Example app listening on port 3000!");
});
