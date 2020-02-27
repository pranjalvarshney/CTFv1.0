const express = require('express');
const passport=require('passport')
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const User=require('../models/User');

router.get('/pikachu0', ensureAuthenticated, (req, res) =>res.render('pikachu0',{user: req.user}));
router.post('/pikachu0',ensureAuthenticated,(req,res)=>{
	if( req.user.time > 0){
		if(req.user.level0== false ){
			if(req.body.user=='ctf' && req.body.password=='password123'){
				if( req.user.time >=  9000000-300000)
				{
					req.user.points += 100;
					req.user.level0=true;
					req.user.save();
					res.redirect('/success');
				}
				else if( req.user.time< 90000000-300000 && req.user.time>= 9000000-2100000){
					req.user.points += (100-((9000000-req.user.time)/30000));
					req.user.level0=true;
					req.user.save()
					res.redirect('/success')
				}
				else{
					req.user.points += 30;
					req.user.level0=true;
					req.user.save()
					res.redirect('/success')	
				}
			}else{
				res.redirect('/retry');
			}
		}else{
			res.redirect('/solved');
		}
	}else{
		res.redirect('/timeup');
	}
})
router.get('/pikachu1', ensureAuthenticated, (req, res) => res.render('pikachu1',{user: req.user}));
router.post('/pikachu1',ensureAuthenticated,(req,res)=>{
	if( req.user.time > 0){
		if(req.user.level1 == false){
			if(req.body.password=='ctf{magg1_SabK0_bnani_AAt1_ha1}'){
				if( req.user.time>=  9000000-600000)
				{
					req.user.points += 100;
					req.user.level1=true;
					req.user.save()
					res.redirect('/success')
				}
				else if( req.user.time< 90000000-600000 && req.user.time>= 9000000-2400000){
					req.user.points += (100-((9000000-req.user.time)/30000));
					req.user.level1=true;
					req.user.save()
					res.redirect('/success')
				}
				else{
					req.user.points += 30;
					req.user.level1=true;
					req.user.save()
					res.redirect('/success')	
				}
			}else{
				res.redirect('/retry');
			}
		}else{
			res.redirect('/solved');
		}
	}else{
		res.redirect('/timeup');
	}
})
router.get('/pikachu2', ensureAuthenticated, (req, res) => res.render('pikachu2',{user: req.user}));
router.post('/pikachu2',ensureAuthenticated,(req,res)=>{
	if( req.user.time > 0){
		if(req.user.level2 == false){
			if(req.body.password == 'ctf{linux 1s 8etter than wind0ws}'){
				if( req.user.time>=  9000000-900000)
				{
					req.user.points += 100;
					req.user.level3=true;
					req.user.save()
					res.redirect('/success')
				}
				else if( req.user.time< 90000000-1200000 && req.user.time>= 9000000-2700000){
					req.user.points += (100-((9000000-req.user.time)/30000));
					req.user.level3=true;
					req.user.save()
					res.redirect('/success')
				}
				else{
					req.user.points += 30;
					req.user.level3=true;
					req.user.save()
					res.redirect('/success')	
				}
			}else{
				res.redirect('/retry');
			}
		}else{
			res.redirect('/solved');
		}
	}else{
		res.redirect('/timeup');
	}
})
router.get('/pikachu3', ensureAuthenticated, (req, res) => res.render('pikachu3',{user: req.user}));
router.post('/pikachu3',ensureAuthenticated,(req,res)=>{
	if( req.user.time > 0){
		if(req.user.level3 == false){
			if(req.body.password == 'ctf{1_l0ve_yu0_3000}'){
				if( req.user.time>=  9000000-1200000)
				{
					req.user.points += 100;
					req.user.level3=true;
					req.user.save()
					res.redirect('/success')
				}
				else if( req.user.time< 90000000-300000 && req.user.time>= 9000000-3000000){
					req.user.points += (100-((9000000-req.user.time)/30000));
					req.user.level3=true;
					req.user.save()
					res.redirect('/success')
				}
				else{
					req.user.points += 30;
					req.user.level3=true;
					req.user.save()
					res.redirect('/success')	
				}
			}else{
				res.redirect('/retry');
			}
		}else{
			res.redirect('/solved');
		}
	}else{
		res.redirect('/timeup');
	}
})
router.get('/pikachu4', ensureAuthenticated, (req, res) => res.render('pikachu4',{user: req.user}));
router.post('/pikachu4',ensureAuthenticated,(req,res)=>{
	if( req.user.time > 0){
		if(req.user.level4 == false){
			if(req.body.password == 'ctf{F1APY0URHAND5}'){
				if( req.user.time>=  9000000-1500000)
				{
					req.user.points += 100;
					req.user.level4=true;
					req.user.save()
					res.redirect('/success')
				}
				else if( req.user.time< 90000000-300000 && req.user.time>= 9000000-3300000){
					req.user.points += (100-((9000000-req.user.time)/30000));
					req.user.level4=true;
					req.user.save()
					res.redirect('/success')
				}
				else{
					req.user.points += 30;
					req.user.level4=true;
					req.user.save()
					res.redirect('/success')	
				}
			}else{
				res.redirect('/retry');
			}
		}else{
			res.redirect('/solved');
		}
	}else{
		res.redirect('/timeup');
	}
})
router.get('/pikachu5', ensureAuthenticated, (req, res) => res.render('pikachu5',{user: req.user}));
router.post('/pikachu5',ensureAuthenticated,(req,res)=>{
	if( req.user.time > 0){
		if(req.user.level5 == false){
			if(req.body.password == 'If he had anything confidential to say, he wrote it in cipher, that is, by so changing the order of the letters of the alphabet, that not a word could be made out. CTF v1.0 SOICT'){
				if( req.user.time>=  9000000-1800000)
				{
					req.user.points += 100;
					req.user.level5=true;
					req.user.save()
					res.redirect('/success')
				}
				else if( req.user.time< 90000000-300000 && req.user.time>= 9000000-3600000){
					req.user.points += (100-((9000000-req.user.time)/30000));
					req.user.level5=true;
					req.user.save()
					res.redirect('/success')
				}
				else{
					req.user.points += 30;
					req.user.level5=true;
					req.user.save()
					res.redirect('/success')	
				}
			}else{
				res.redirect('/retry');
			}
		}else{
			res.redirect('/solved');
		}
	}else{
		res.redirect('/timeup');
	}
})
router.get('/pikachu6', ensureAuthenticated, (req, res) => res.render('pikachu6',{user: req.user}));
router.post('/pikachu6',ensureAuthenticated,(req,res)=>{
	if( req.user.time > 0){
		if(req.user.level6 == false){
			if(req.body.password == 'anonctf{j5_t0_th3_rescu3}'){
				if( req.user.time>=  9000000-2100000)
				{
					req.user.points += 100;
					req.user.level6=true;
					req.user.save()
					res.redirect('/success')
				}
				else if( req.user.time< 90000000-300000 && req.user.time>= 9000000-3900000){
					req.user.points += (100-((9000000-req.user.time)/30000));
					req.user.level6=true;
					req.user.save()
					res.redirect('/success')
				}
				else{
					req.user.points += 30;
					req.user.level6=true;
					req.user.save()
					res.redirect('/success')	
				}
			}else{
				res.redirect('/retry');
			}
		}else{
			res.redirect('/solved');
		}
	}else{
		res.redirect('/timeup');
	}
})
router.get('/pikachu7', ensureAuthenticated, (req, res) => res.render('pikachu7',{user: req.user}));
router.post('/pikachu7',ensureAuthenticated,(req,res)=>{
	if( req.user.time > 0){
		if(req.user.level6 == false){
			if(req.body.password == 'password123'){
				if( req.user.time>=  9000000-2400000)
				{
					req.user.points += 100;
					req.user.level6=true;
					req.user.save()
					res.redirect('/success')
				}
				else if( req.user.time< 90000000-300000 && req.user.time>= 9000000-4200000){
					req.user.points += (100-((9000000-req.user.time)/30000));
					req.user.level6=true;
					req.user.save()
					res.redirect('/success')
				}
				else{
					req.user.points += 30;
					req.user.level6=true;
					req.user.save()
					res.redirect('/success')	
				}
			}else{
				res.redirect('/retry');
			}
		}else{
			res.redirect('/solved');
		}
	}else{
		res.redirect('/timeup');
	}
})
module.exports = router;