// @ts-check

const express = require("express");

const app = express();

require("dotenv").config();

const { PORT } = process.env;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(PORT, () => {
  /* eslint-disable-next-line */
  console.log(`listening to server at ${PORT}`);
});
