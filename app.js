const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");
const router = express.Router();

router;
const app = express();

const port = process.env.PORT || 5555;

app.get("/", (req, res) => {
  return res.send("hello worlds... shweta here");
});

app.get("/login", (req, res) => {
  return res.send("this is login page");
});

//DB connection
mongoose
  .connect(process.env.DATA_BASE, {})
  .then(() => {
    console.log("DB CONNECTED");
  });

//middleware
app.use(
  bodyParser.json({
    type: "application/json",
  })
);
app.use(cookieParser());
app.use(cors());

//all routes
app.use("/api", authRoutes);

//starting server
app.listen(port, () => {
  console.log(`app listing on port ${port}`);
});
  