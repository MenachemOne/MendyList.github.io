const express = require("express");
const mongoose = require("mongoose");
const user = require("../DB/user");
const route = express.Router();

route.post("/", async (req, res) => {
  console.log(req.body);
  const { firsName, lastName } = req.body;
  let user = {};
  user.firsName = firsName;
  user.lastName = lastName;
  let userModel = new User(user);
  await userModel.save();
  res.json(userModel);
});
module.exports = route;
