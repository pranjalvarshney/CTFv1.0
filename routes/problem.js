const express = require('express');
const passport=require('passport')
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const User=require('../models/User')

router.get('/pikachu0', ensureAuthenticated, (req, res) =>{ 
    res.render('pikachu0')

});
router.post('/pikachu0',ensureAuthenticated,(req,res)=>{
	if(req.body.user=='abc' && req.body.password=='123'){
		req.user.levelStatus[0]=true;
		req.user.save()
	}
})
router.get('/pikachu1', ensureAuthenticated, (req, res) => res.render('pikachu1'));
router.post('/pikachu1',ensureAuthenticated,(req,res)=>{
	if(req.body.password=='answer'){
		req.user.levelStatus[1]=true;
		req.user.save()
	}
})
router.get('/pikachu2', ensureAuthenticated, (req, res) => res.render('pikachu2'));
router.post('/pikachu2',ensureAuthenticated,(req,res)=>{
	if(req.body.password=='answer'){
		req.user.levelStatus[2]=true;
		req.user.save()
	}
})
router.get('/pikachu3', ensureAuthenticated, (req, res) => res.render('pikachu3'));
router.post('/pikachu3',ensureAuthenticated,(req,res)=>{
	if(req.body.password=='answer'){
		req.user.levelStatus[3]=true;
		req.user.save()
	}
})
router.get('/pikachu4', ensureAuthenticated, (req, res) => res.render('pikachu4'));
router.post('/pikachu4',ensureAuthenticated,(req,res)=>{
	if(req.body.password=='answer'){
		req.user.levelStatus[4]=true;
		req.user.save()
	}
})
router.get('/pikachu5', ensureAuthenticated, (req, res) => res.render('pikachu5'));
router.post('/pikachu5',ensureAuthenticated,(req,res)=>{
	if(req.body.password=='answer'){
		req.user.levelStatus[5]=true;
		req.user.save()
	}
})
router.get('/pikachu6', ensureAuthenticated, (req, res) => res.render('pikachu6'));
router.post('/pikachu6',ensureAuthenticated,(req,res)=>{
	if(req.body.password=='answer'){
		req.user.levelStatus[6]=true;
		req.user.save()
	}
})
module.exports = router;