const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User.model');
const router = express.Router();
const { isAuthenticated } = require('../middleware/jwt.middleware.js');
const saltRounds = 10;
router.post('/signup', (req, res, next) => {
  const { email, password, name, birthday, gender, animal, height, weight, area, lang, aboutMe, url } = req.body;
  if (email === '' || password === '') {
    res.status(400).json({ message: 'Please provide email and password' });
    return;
  }
  User.findOne({ email })
    .then((foundUser) => {
      if (foundUser) {
        res.status(400).json({ message: 'The E-mail is already registed.' });
        return;
      }
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashedPassword = bcrypt.hashSync(password, salt);
      return User.create({ email, password: hashedPassword, name, birthday, gender, animal, height, weight, area, lang, aboutMe, url });
    })
    .then((createdUser) => {
      const { email, name, birthday, gender, animal, height, weight, area, lang, aboutMe, url, _id } = createdUser;
      const user = { email, name, birthday, gender, animal, height, weight, area, lang, aboutMe, url, _id };
      res.status(201).json({ user: user });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'Oh no! Server Error' });
    });
});

router.post('/login', (req, res, next) => {
  const { email, password } = req.body;
  if (email === '' || password === '') {
    res.status(400).json({ message: 'Please provide email and password.' });
    return;
  }
  User.findOne({ email })
    .then((foundUser) => {
      if (!foundUser) {
        res.status(401).json({ message: 'User not found.' });
        return;
      }
      const passwordCorrect = bcrypt.compareSync(password, foundUser.password);
      if (passwordCorrect) {
        const { _id, email } = foundUser;
        const payload = { _id, email };
        const authToken = jwt.sign(payload, process.env.TOKEN_SECRET, { algorithm: 'HS256', expiresIn: '6h' });
        res.status(200).json({ authToken: authToken });
      } else {
        res.status(401).json({ message: 'Unable to authenticate the user' });
      }
    })
    .catch((err) => res.status(500).json({ message: 'Internal Server Error' }));
});

router.get('/verify', isAuthenticated, (req, res, next) => {
  res.status(200).json(req.payload);
});

module.exports = router;
