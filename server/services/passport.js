const passport = require('passport');
const GoogleStratgey = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

//Cookie time, serializing user

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});
passport.use(
    new GoogleStratgey({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: "http://localhost:5000/auth/google/callback"
    }, 
    (accessToken, refreshToken, profile, done) => {
        // console.log(profile);
        
        //async request, returns promise
        User.findOne({ googleId: profile.id })
            .then((existingUser) => {
                if (existingUser){
                    //if the user exists with the profile ID, dont create a new instance
                    done(null, existingUser);
                }
                else {
                    //if the user doesnt exists, create a new instance
                    new User({ googleId: profile.id })
                        .save()
                        .then(user => done(null, user));
                }
            });
    })
);
