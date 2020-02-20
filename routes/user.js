const express = require('express');
const router = express.Router();
const passport = require('passport');
// Load User model
const User = require('../models/User');
const { forwardAuthenticated } = require('../config/auth');

// Login Page
router.get('/login', forwardAuthenticated, (req, res) => res.render('login'));

// Register Page
router.get('/register', forwardAuthenticated, (req, res) => res.render('register'));

// Register
router.post('/register', (req, res) => {
  const { name, rollno, email, password} = req.body;
  let errors = [];

  if (!name || !rollno || !email || !password ) {
    errors.push({ msg: 'Please fill all details' });
  }

  if (password.length < 5) {
    errors.push({ msg: 'Password must be at least 5 characters' });
  }

  if (errors.length > 0) {
    res.render('register', {
      errors,
      name,
      rollno,
      email,
      password
    });
  } else {
    User.findOne({ email: email }).then(user => {
      if (user) {
        errors.push({ msg: 'Email already exists' });
        res.render('register', {
          errors,
          name,
          rollno,
          email,
          password,
        });
      } else {
        const newUser = new User({
          name,
          rollno,
          email,
          password
        });
        newUser
              .save()
              .then(user => {
                req.flash(
                  'success_msg',
                  'You are now registered and can log in'
                );
                res.redirect('/user/login');
              })
              .catch(err => console.log(err));
      }
    });
  }
});

// Login
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/user/login',
    failureFlash: true
  })(req, res, next);
});


//Points Table 
router.get('/pointstable',function(req,res,next){
  res.render('pointstable');
});

//Rules page 
router.get('/rules',function(req,res,next){
  res.render('rules');
});

//Profile page 
router.get('/profile',function(req,res,next){
  res.render('profile');
});


// Logout
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/user/login');
});


module.exports = router;
