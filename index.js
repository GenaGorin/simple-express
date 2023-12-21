const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/success", function (req, res) {
  res.send("success");
});

app.get("/fail", function (req, res) {
  res.send("fail");
});

app.get("/status", function (req, res) {
  res.send("status");
});

app.post("/payment", function (req, res) {
  res.status(200).send(req.body);
});

app.listen(PORT, () => console.log(" server start on ", PORT));
