const express = require('express');
const passport=require('passport')
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const User=require('../models/User');

router.get('/pikachu0', ensureAuthenticated, (req, res) =>res.render('pikachu0',{user: req.user}));
router.post('/pikachu0',ensureAuthenticated,(req,res)=>{
	if(req.body.user=='abc' && req.body.password=='123'){
		if( timer.ms >=  9000000-600000)
		{
			req.user.points+=100;
			req.user.level0=true;
			req.user.save()
			res.redirect('/problems')
		}
		else( timer.ms < 90000000-600000 && timer.ms >= 9000000-1200000){
			req.user.points+=100-((9000000-timer.ms)/30000)
		}
	}
})
router.get('/pikachu1', ensureAuthenticated, (req, res) => res.render('pikachu1',{user: req.user}));
router.post('/pikachu1',ensureAuthenticated,(req,res)=>{
	if(req.body.password=='answer'){
		req.user.level1=true;
		req.user.save()
		res.redirect('/problems')
	}
})
router.get('/pikachu2', ensureAuthenticated, (req, res) => res.render('pikachu2',{user: req.user}));
router.post('/pikachu2',ensureAuthenticated,(req,res)=>{
	if(req.body.password=='answer'){
		req.user.level2=true;
		req.user.save()
		res.redirect('/problems')
	}
})
router.get('/pikachu3', ensureAuthenticated, (req, res) => res.render('pikachu3',{user: req.user}));
router.post('/pikachu3',ensureAuthenticated,(req,res)=>{
	if(req.body.password=='answer'){
		req.user.level3=true;
		req.user.save()
		res.redirect('/problems')
	}
})
router.get('/pikachu4', ensureAuthenticated, (req, res) => res.render('pikachu4',{user: req.user}));
router.post('/pikachu4',ensureAuthenticated,(req,res)=>{
	if(req.body.password=='answer'){
		req.user.level4=true;
		req.user.save()
		res.redirect('/problems')
	}
})
router.get('/pikachu5', ensureAuthenticated, (req, res) => res.render('pikachu5',{user: req.user}));
router.post('/pikachu5',ensureAuthenticated,(req,res)=>{
	if(req.body.password=='answer'){
		req.user.level5=true;
		req.user.save()
		res.redirect('/problems')
	}
})
router.get('/pikachu6', ensureAuthenticated, (req, res) => res.render('pikachu6',{user: req.user}));
router.post('/pikachu6',ensureAuthenticated,(req,res)=>{
	if(req.body.password=='answer'){
		req.user.level6=true;
		req.user.save()
		res.redirect('/problems')
	}
})
module.exports = router;