const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();

dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT;

require("./db/conn");
//Midlle Ware
const middleware = (req, res, next) => {
  console.log(`Hello my MiddleWire`);
  next();
};

app.get("/", (req, res) => {
  res.send(`Hello world from Home server`);
});

app.get("/about", middleware, (req, res) => {
  console.log(`Hello this is about`);
  res.send(`Hello World from About `);
});
app.get("/contact", (req, res) => {
  res.send(`Hello World from Contact`);
});

app.get("/signin", (req, res) => {
  res.send(`Hello World from Sign IN`);
});

app.get("/signup", (req, res) => {
  res.send(`Hello World from Sign UP`);
});

app.listen(PORT, () => console.log(`Listening at port at ${PORT}`));
//
