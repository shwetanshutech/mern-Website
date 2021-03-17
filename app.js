const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send(`Hello world from Home server`);
});

app.get("/about", (req, res) => {
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

app.listen(3000, () => console.log(`Listening at port 3000`));
