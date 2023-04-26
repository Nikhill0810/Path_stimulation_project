const express = require("express");
const app = express();
const hostname = 'localhost';
const port = 4000;

app.use("/public", express.static(__dirname + "/public"))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

app.listen(port,hostname, () => {
  console.log("The server is up and running!");
});
