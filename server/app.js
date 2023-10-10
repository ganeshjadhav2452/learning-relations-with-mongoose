require("dotenv").config();
const express = require("express");
const router = require("./routes/router");
const mongoConnect = require("./utils/database");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(router);

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_USERPASSWORD}@learningcluster.i4rpmhh.mongodb.net/?retryWrites=true&w=majority`
  )
  .then((res) => {
    app.listen(5000, () => console.log("server started..."));
  })
  .catch((err) => console.log(err));
