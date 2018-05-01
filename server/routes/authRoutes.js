const passport = require('passport');

module.exports = app => {
    app.get(
        '/auth/google', 
        passport.authenticate('google', {
            scope: ["profile", "email"]
        })
    );

    //after the request is sucessful from the oauth
    app.get('/auth/google/callback', passport.authenticate('google'));
}