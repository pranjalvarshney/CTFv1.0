const express = require('express');
const router = express.Router();
const allusers = require('../models/User');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const Stopwatch=require('timer-stopwatch');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome',{user: req.user}));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);
router.get('/pointstable', ensureAuthenticated, (req, res) =>{
        allusers.find({},(err,users)=>{
          if(users){
            res.render('pointstable',{users,user:req.user});
          }
          else{
            console.log(err);
          }
        })
    
});
router.get('/profile', ensureAuthenticated, (req, res) =>
  res.render('profile',{
    user: req.user
  })
);
router.get('/rules', ensureAuthenticated, (req, res) =>
  res.render('rules',
    {user: req.user})
);


router.get('/problems', ensureAuthenticated, (req, res) =>{
  console.log('hi there')
    var options = {
      refreshRateMS: 1000,    // How often the clock should be updated
      almostDoneMS: 8500000,  // When counting down - this event will fire with this many milliseconds remaining on the clock
  }
  function update_timer(time){
  req.user.time=time;
  req.user.save();
  console.log(req.user);
}

  var timer = new Stopwatch(req.user.time,options);
    timer.start();
    timer.onTime(function(time){
      update_timer(time.ms)
  })
  res.render('problems',{user:req.user})
});

module.exports = router;
