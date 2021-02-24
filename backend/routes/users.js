const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//database
const Users = require("../models/users");
const Events = require("../models/events");


//get all users data
router.get("/", (req, res) => {
  Users.find()
    .populate('Events')
    .then((users) => {
      res.json({ msg: users });
    })
    .catch((err) => res.json({ msg: err }));
});


//Sign Un
router.post("/signup", (req, res) => {
  const newUser = req.body

  newUser.email = newUser.email.toLowerCase();
  Users.findOne({ email: newUser.email })
    .then((user) => {

      // if the email in the database !
      if (user) {
        res.json({
          msg: "This email is used try different one ! ",
        });
      }

      // if the email is not in the database
      else {
        var salt = bcrypt.genSaltSync(10);
        newUser.password = bcrypt.hashSync(req.body.password, salt);
        newUser.email = newUser.email.toLowerCase();
        Users.create(newUser).then((user) => {
          res.json({ msg: "user hasbeen register", user: user });
        });
      }
    })
    .catch((err) => res.json({ msg: err }));
})


//Log In
router.post("/login", async (req, res) => {
  let { email, password } = req.body;
  //  let email = req.body.email ; let password = req.body.password
  email = email.toLowerCase();
  const user = await Users.findOne({ email: email });
  
  // if email is  not exist
  if (!user) {
    res.json({ msg: "email is not exist" });
  }
  // if email is  exist
  else {
    // if password is currect
    if (bcrypt.compareSync(password, user.password)) {
      user.password = undefined;
      let payload = { user };
      let token = jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn: 1000 * 60 * 60,
      }); // to the user info
      res.json({ msg: "user login ", token });
    }
    // / if password is not correct
    else {
      res.json({ msg: "password is not correct" });
    }
  }
});

// edit
router.put("/editProfile/:userId", (req, res) => {

  let userId = req.params.userId
  let { name, experience, password, email, phoneNumber, age, gender, language } = req.body;

  userUpdate = {}
  if(name) Object.assign(userUpdate, {name})
  if(experience) Object.assign(userUpdate, {experience})

  if(password) Object.assign(userUpdate, {password})
  if(email) Object.assign(userUpdate, {email})

  if(phoneNumber) Object.assign(userUpdate, {phoneNumber})
  if(age) Object.assign(userUpdate, {age})

  if(gender) Object.assign(userUpdate, {gender})
  if(language) Object.assign(userUpdate, {language})

  // editUser.email = editUser.email.toLowerCase();
  console.log("///////////////////////////////",userUpdate);
  Users.findByIdAndUpdate(userId, userUpdate, {new:true})
    .then(editUser => {
      
      res.json({ msg: "Profile is editing", user: editUser })
    })
});

//Decode User
router.get("/:token", (req, res) => {
  let token = req.params.token;

  jwt.verify(token, process.env.SECRET_KEY, (err, decode) => {
    if (err) return res.json({ msg: err });

    let user = decode;

    res.json({ msg: "user decoded", user });
  });
});


module.exports = router;
