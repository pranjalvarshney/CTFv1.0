const express = require('express');
const passport=require('passport')
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const User=require('../models/User')

router.get('/pikachu0', ensureAuthenticated, (req, res) =>res.render('pikachu0'));
router.post('/pikachu0',ensureAuthenticated,(req,res)=>{
	if(req.body.user=='abc' && req.body.password=='123'){
		req.user.level0=true;
		req.user.save()
		res.redirect('/problems')
	}
})
router.get('/pikachu1', ensureAuthenticated, (req, res) => res.render('pikachu1'));
router.post('/pikachu1',ensureAuthenticated,(req,res)=>{
	if(req.body.password=='answer'){
		req.user.level1=true;
		req.user.save()
		res.redirect('/problems')
	}
})
router.get('/pikachu2', ensureAuthenticated, (req, res) => res.render('pikachu2'));
router.post('/pikachu2',ensureAuthenticated,(req,res)=>{
	if(req.body.password=='answer'){
		req.user.level2=true;
		req.user.save()
		res.redirect('/problems')
	}
})
router.get('/pikachu3', ensureAuthenticated, (req, res) => res.render('pikachu3'));
router.post('/pikachu3',ensureAuthenticated,(req,res)=>{
	if(req.body.password=='answer'){
		req.user.level3=true;
		req.user.save()
		res.redirect('/problems')
	}
})
router.get('/pikachu4', ensureAuthenticated, (req, res) => res.render('pikachu4'));
router.post('/pikachu4',ensureAuthenticated,(req,res)=>{
	if(req.body.password=='answer'){
		req.user.level4=true;
		req.user.save()
		res.redirect('/problems')
	}
})
router.get('/pikachu5', ensureAuthenticated, (req, res) => res.render('pikachu5'));
router.post('/pikachu5',ensureAuthenticated,(req,res)=>{
	if(req.body.password=='answer'){
		req.user.level5=true;
		req.user.save()
		res.redirect('/problems')
	}
})
router.get('/pikachu6', ensureAuthenticated, (req, res) => res.render('pikachu6'));
router.post('/pikachu6',ensureAuthenticated,(req,res)=>{
	if(req.body.password=='answer'){
		req.user.level6=true;
		req.user.save()
		res.redirect('/problems')
	}
})
module.exports = router;