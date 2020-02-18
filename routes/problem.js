const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');


router.get('/pikachu0', ensureAuthenticated, (req, res) =>{ 
    res.render('pikachu0')
});

router.get('/pikachu1', ensureAuthenticated, (req, res) => res.render('pikachu1'));

router.get('/pikachu2', ensureAuthenticated, (req, res) => res.render('pikachu2'));

router.get('/pikachu3', ensureAuthenticated, (req, res) => res.render('pikachu3'));

router.get('/pikachu4', ensureAuthenticated, (req, res) => res.render('pikachu4'));

router.get('/pikachu5', ensureAuthenticated, (req, res) => res.render('pikachu5'));

router.get('/pikachu6', ensureAuthenticated, (req, res) => res.render('pikachu6'));

module.exports = router;