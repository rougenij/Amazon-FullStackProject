const mongoose = require("mongoose");
require("dotenv").config();
const password = process.env.PASSWORD;
const name = process.env.NAME;
const db = process.env.DB;

mongoose.connect(
  `mongodb+srv://${name}:${password}@${db}/myFirstDatabase?retryWrites=true&w=majority`,
  {}
);
