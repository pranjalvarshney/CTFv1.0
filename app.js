const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');

const app = express();

require('./config/passport')(passport);

const db = require('./config/keys').MongoURI;
mongoose.connect(db,{ useNewUrlParser: true, useUnifiedTopology: true })
	.then(()=> console.log("Mongo connected..."))
	.catch(err => console.log(err));


// Middleware EJS
app.use(expressLayouts);
app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));

// BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//Express session
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true,
}));

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Connect flash
app.use(flash());

//Global variables
app.use((req,res,next)=>{
	res.locals.success_msg = req.flash('success_msg');
	res.locals.error_msg = req.flash('error_msg');	
	res.locals.error = req.flash('error');
	next();
});

// Index route
app.use('/',require('./routes/index'));
// Users route
app.use('/user',require('./routes/user'));
app.use('/problems',require('./routes/problem'));

const PORT = process.env.PORT || 3000;
app.listen(PORT,console.log('Server started on ' + PORT));