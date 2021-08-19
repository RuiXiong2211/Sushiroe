const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routesUrl = require("./routes/reservations");
const cors = require("cors");
const path = require("path");

const PORT = process.env.PORT || 5000;
dotenv.config();
console.log(PORT);
mongoose.connect(process.env.DATABASE_ACCESS, () =>
  console.log("database connected")
);

app.use(express.json());
app.use(cors());
app.use("/app", routesUrl);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../build")));
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../build", "index.html"));
//   });
// } else {
//   app.get("/app", (req, res) => {
//     res.send("api running");
//   });
// }


app.listen(PORT, () => console.log("server is up and running"));
