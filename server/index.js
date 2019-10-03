const express = require("express");
var path = require("path");

const app = express();
const port = 80;

app.use(express.static('build'));

app.use((req, res, next) => {
console.log('Hello');
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});


app.get("/", function(req, res) {
  res.send("hello world");
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
