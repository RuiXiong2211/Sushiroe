const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routesUrl = require("./controller/reservations");
const cors = require("cors");
const path = require("path");
const config = require('./utils/config')

dotenv.config();
console.log(process.env.PORT);
mongoose.connect(config.MONGODB_URI, () =>
  console.log("database connected")
);

app.use(express.static('build'))
app.use(express.json());
app.use(cors());
app.use("/app", routesUrl);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
} else {
  app.get("/app", (req, res) => {
    res.send("api running");
  });
}


let server = app.listen(config.PORT, () => console.log(`Server running on port ${config.PORT}`));

module.exports = server
