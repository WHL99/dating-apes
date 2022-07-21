const express = require("express");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const User = require("../models/User.model");
const router = express.Router();

const { isAuthenticated } = require('./../middleware/jwt.middleware.js');
const saltRounds = 10;

// POST  註冊授權
router.post('/signup', (req, res, next) => {
  const { email, password, name, birthday, gender, postCode } = req.body;

  console.log( req.body)
  if (email === '' || password === '') {
    res.status(400).json({ message: "Please provide email and password" });
    return;
  }

  // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  // if (!emailRegex.test(email)) {
  //   res.status(400).json({ message: 'Please provide a valid email address.' });
  //   return;
  // }

  // Use regex to validate the password format
  // const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  // if (!passwordRegex.test(password)) {
  //   res.status(400).json({ message: 'Password must have at least 6 characters and contain at least one number, one lowercase and one uppercase letter.' });
  //   return;
  // }

  User.findOne({ email })
    .then((foundUser) => {
      if (foundUser) {
        res.status(400).json({ message: "The E-mail is already registed." });
        return;
      }

      const salt = bcrypt.genSaltSync(saltRounds);
      const hashedPassword = bcrypt.hashSync(password, salt);

      return User.create({ email, name, birthday, gender, postCode, password: hashedPassword });
    })
    .then((createdUser) => {
      // const { email, password, name, birthday, gender, postCode } = createdUser;
      const { email, password, name, birthday, gender, postCode, _id } = createdUser;


      const user = { email, password, name, birthday, gender, postCode, _id };


      res.status(201).json({ user: user });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Oh no! Server Error" })
    });
});


// POST  登入授權
router.post('/login', (req, res, next) => {
  const { email, password } = req.body;

  if (email === '' || password === '') {
    res.status(400).json({ message: "Please provide email and password." });
    return;
  }

  User.findOne({ email })
    .then((foundUser) => {

      if (!foundUser) {
        res.status(401).json({ message: "User not found." })
        return;
      }

      const passwordCorrect = bcrypt.compareSync(password, foundUser.password);

      if (passwordCorrect) {
        const { _id, email } = foundUser;

        // Create an object that will be set as the token payload
        const payload = { _id, email };

        // Create and sign the token -> jwt.sign(payload, secretKey, options)
        const authToken = jwt.sign(
          payload,
          process.env.TOKEN_SECRET,
          { algorithm: 'HS256', expiresIn: "6h" }
        );
        // Send the token as the response
        res.status(200).json({ authToken: authToken });
      }
      else {
        res.status(401).json({ message: "Unable to authenticate the user" });
      }
    })
    .catch(err => res.status(500).json({ message: "Internal Server Error" }));
});



// GET  驗證授權
router.get('/verify', isAuthenticated, (req, res, next) => {
  console.log(`req.payload`, req.payload);
  res.status(200).json(req.payload);
});






module.exports = router;