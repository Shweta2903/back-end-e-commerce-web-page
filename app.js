const express = require("express");
const app = express();

const port = 5555;

app.get("/", (req, res) => {
  return res.send("hello worlds... shweta here");
});

app.get("/login", (req, res) => {
  return res.send("this is login page");
});

app.listen(port, () => {
  console.log(`app listing on port ${port}`);
});
