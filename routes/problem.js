const express = require('express');
const passport=require('passport')
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const User=require('../models/User');

router.get('/pikachu0', ensureAuthenticated, (req, res) =>res.render('pikachu0',{user: req.user}));
router.post('/pikachu0',ensureAuthenticated,(req,res)=>{
	if( req.user.time > 0){
		if(req.user.level0== false ){
			if(req.body.user=='abc' && req.body.password=='123'){
				if( req.user.time >=  9000000-300000)
				{
					req.user.points += 100;
					req.user.level0=true;
					req.user.save();
					res.redirect('/success');
				}
				else if( req.user.time< 90000000-300000 && req.user.time>= 9000000-1800000){
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
			if(req.body.password=='answer'){
				if( req.user.time>=  9000000-600000)
				{
					req.user.points += 100;
					req.user.level1=true;
					req.user.save()
					res.redirect('/success')
				}
				else if( req.user.time< 90000000-600000 && req.user.time>= 9000000-1200000){
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
			if(req.body.password == 'answer'){
				if( req.user.time>=  9000000-1200000)
				{
					req.user.points += 100;
					req.user.level3=true;
					req.user.save()
					res.redirect('/success')
				}
				else if( req.user.time< 90000000-1200000 && req.user.time>= 9000000-2100000){
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
			if(req.body.password == 'answer'){
				if( req.user.time>=  9000000-2100000)
				{
					req.user.points += 100;
					req.user.level3=true;
					req.user.save()
					res.redirect('/success')
				}
				else if( req.user.time< 90000000-300000 && req.user.time>= 9000000-900000){
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
			if(req.body.password == 'answer'){
				if( req.user.time>=  9000000-300000)
				{
					req.user.points += 100;
					req.user.level4=true;
					req.user.save()
					res.redirect('/success')
				}
				else if( req.user.time< 90000000-300000 && req.user.time>= 9000000-900000){
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
			if(req.body.password == 'answer'){
				if( req.user.time>=  9000000-300000)
				{
					req.user.points += 100;
					req.user.level5=true;
					req.user.save()
					res.redirect('/success')
				}
				else if( req.user.time< 90000000-300000 && req.user.time>= 9000000-900000){
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
			if(req.body.password == 'answer'){
				if( req.user.time>=  9000000-300000)
				{
					req.user.points += 100;
					req.user.level6=true;
					req.user.save()
					res.redirect('/success')
				}
				else if( req.user.time< 90000000-300000 && req.user.time>= 9000000-900000){
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