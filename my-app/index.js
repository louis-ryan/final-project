var express = require("express");
var app = express();
const db = require("./db");

app.get("/", (req, res) => {
  console.log("GET REQ IS WORKING!");
  const { bpm, key } = req.params;
  db.getTracks(bpm, key).then({ data });
});
