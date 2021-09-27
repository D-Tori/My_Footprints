// @ts-check
require("dotenv").config();

const { PORT } = process.env;

const express = require("express");

const mountRoutes = require("./routes");

const app = express();

mountRoutes(app);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(PORT, () => {
  /* eslint-disable-next-line */
  console.log(`listening to server at ${PORT}`);
});
