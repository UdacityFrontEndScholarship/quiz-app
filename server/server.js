const express = require('express');
const path = require('path');
const passport = require('passport');
const GoogleStratgey = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
const app = express();

const PORT = process.env.PORT || "5000";

passport.use(
    new GoogleStratgey({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: "http://localhost:5000/auth/google/callback"
    }, 
    (accessToken, refreshToken, profile, done) => {
        console.log(profile);
    })
);

app.get(
    '/auth/google', 
    passport.authenticate('google', {
        scope: ["profile", "email"]
    })
);

//after the request is sucessful from the oauth
app.get('/auth/google/callback', passport.authenticate('google'));

//for static homepage

//middleware
app.use(express.static(path.join(__dirname + '/../build')));
app.get("/", (req, res) => { 
    res.sendFile(path.join(__dirname, '/../build/index.html')); 
});


app.listen(PORT, () => {
    console.log(`Server running at Port ${PORT}`);
});