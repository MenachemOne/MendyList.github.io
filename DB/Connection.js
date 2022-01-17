const mongoose = require("mongoose");

const URI =
  "mongodb+srv://menachems:Motek@cluster0.oaftg.mongodb.net/todo?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUniFiedTopology: true,
  });
  console.log("db connected..!");
};

module.exports = connectDB;
