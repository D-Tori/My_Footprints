// @ts-check
const express = require("express");

const mountRoutes = require("./routes");

const app = express();

mountRoutes(app);

app.get("/", (req, res) => {
  res.status(200).send("Hello world!");
});

module.exports = app;
