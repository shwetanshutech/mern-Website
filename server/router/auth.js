const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(`Hello world from server router`);
});

router.post("/register", (req, res) => {
  console.log(req.body);
  res.json({ message: req.body });
});
module.exports = router;
// {
//     "name":"shwetanshu",
//     "email": "shwetanshu@web.com",
//     "phone":"7928378927",
//     "work":"web dev",
//     "password": "password",
//     "cpassword": "password"

// }
