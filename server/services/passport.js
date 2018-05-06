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
    async (accessToken, refreshToken, profile, done) => {
        // console.log(profile);
        // console.log(profile.photos);
        
        //async request, returns promise
        const existingUser = await User.findOne({ googleId: profile.id })
        if (existingUser){
        //if the user exists with the profile ID, dont create a new instance
            return done(null, existingUser);
        }
        //if the user doesnt exists, create a new instance
        const user = await new User({ 
            googleId: profile.id,
            gender: profile.gender,
            fullName: profile.displayName,
            firstName : profile.name.givenName,
            lastName : profile.name.familyName,
            image : profile.photos[0].value,
            email : profile.emails[0].value
        }).save();
        done(null, user);
    })
);
