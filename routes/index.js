const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);
router.get('/pointstable', ensureAuthenticated, (req, res) =>
  res.render('pointstable')
);
router.get('/profile', ensureAuthenticated, (req, res) =>
  res.render('profile',{
    user: req.user
  })
);
router.get('/rules', ensureAuthenticated, (req, res) =>
  res.render('rules')
);
router.get('/problems', ensureAuthenticated, (req, res) =>
  res.render('problems')
);
module.exports = router;
