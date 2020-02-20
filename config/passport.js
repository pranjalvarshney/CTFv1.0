const LocalStrategy = require('passport-local').Strategy;


// Load User model
const User = require('../models/User');

module.exports= (passport)=> {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      // Match user
      User.findOne({
        email: email                                      
      }).then(user => {
        
        if(!user){
            return done(null,false,{message: "Email not registered"});
        }
        if(password == user.password){
            return done(null,user); 
        }else{
            return done(null,false,{message: "Password is incorrect"});
        }
      });
    })
  );
  passport.serializeUser((user, done)=> {
    done(null, user.id);
  });

  passport.deserializeUser((id, done)=> {
    User.findById(id, (err, user)=> {
      done(err, user);
    });
  });
}

