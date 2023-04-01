const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const MongoDBConnect = require("./connections/mongodbconnect");
const router = require("./router/router");
const port = 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

MongoDBConnect()
  .then((res) => {
    app.listen(port);
    console.log("Connected to Port");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/", router);

app.get("/", (req, res) => {
  res.send("API CHECK");
});
