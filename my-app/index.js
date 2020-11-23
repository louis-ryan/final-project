const express = require("express");
const app = express();
// serve up production assets
app.use(express.static("client/build"));
// let the react app to handle any unknown routes
// serve up the index.html if express does'nt recognize the route
const path = require("path");

// const db = require("./db");

app.get("/", (req, res) => {
  console.log("GET REQ IS WORKING!");
  res.json({success: true});
  // const { bpm, key } = req.params;
  // db.getTracks(bpm, key).then({ data });
});

app.get("/test", (req, res) => {
  console.log("TEST ROUTE IS WORKING!");
  res.json({success: true});
  // const { bpm, key } = req.params;
  // db.getTracks(bpm, key).then({ data });
});

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "build", "client", "index.html"));
  
//   // res.redirect("/");
// });

// if not in production use the port 5000
const PORT = process.env.PORT || 5000;
console.log("server started on port:", PORT);
app.listen(PORT);

// const express       = require('express');
// const app = express();
// app.use(express.static('./public'));
// const path = require('path')
// // Serve static files from the React frontend app
// app.use(express.static(path.join(__dirname, 'server/build')))
// // Anything that doesn't match the above, send back index.html
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '/server/build/index.html'))
// })
// app.listen(process.env.PORT || 3001, () => console.log("Netflix top films up and running!"));