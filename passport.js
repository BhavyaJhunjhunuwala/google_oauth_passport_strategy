const passport= require('passport');
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

passport.use(new GoogleStrategy({
    clientID:     "510704259556-sllbt429id1ec0tuu2g6ktdkgppdjnuk.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:8080/auth/google/callback",
    // /auth/google/callback",
    // passReqToCallback:true,
    scope:["profile","email"],
  },
  function(request,accessToken, refreshToken, profile, done) {
    console.log(profile);
    return done (null,profile);
  }
));


passport.serializeUser(function(user, done) {
  // console.log(user);
      done(null,user);
  });
  
  passport.deserializeUser(function(user,done){
      done(null,user);
  });


