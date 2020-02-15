const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');


router.get('/pikachu1', ensureAuthenticated, (req, res) => res.render('pikachu1'));
module.exports = router;