const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(`Hello world from server router`);
});

require("../db/conn");
const User = require("../model/userSchema");
//USING PROMISES
// router.post("/register", (req, res) => {
//   const { name, email, phone, work, password, cpassword } = req.body;
//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res.status(422).json({
//       error: `Please fill the required information properly`,
//     });
//   }

//   User.findOne({ email: email })
//     .then((userExists) => {
//       if (userExists) {
//         return res.status(422).json({
//           error: `Email Already Exists`,
//         });
//       }

//       const user = new User({ name, email, phone, work, password, cpassword });
//       user
//         .save()
//         .then(() => {
//           res.status(201).json({ message: `User Registered Successfully` });
//         })
//         .catch((err) => res.send(500).json({ err: ` Failed to Register` }));
//     })
//     .catch((err) => console.log(err));
// });

//USING ASYNC

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({
      error: `Please fill the required information properly`,
    });
  }
  try {
    const userExists = await User.findOne({ email: email });
    if (userExists) {
      return res.status(422).json({
        error: `Email Already Exists`,
      });
    }
    const user = new User({ name, email, phone, work, password, cpassword });
    await user.save();

    res.status(201).json({ message: `User Registered Successfully` });
  } catch (err) {
    console.log(err);
  }
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
