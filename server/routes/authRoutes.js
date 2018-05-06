const passport = require('passport');

module.exports = app => {
    app.get(
        '/auth/google', 
        passport.authenticate('google', {
            scope: ["profile", "email"]
        })
    );

    //after the request is sucessful from the oauth
    app.get(
        '/auth/google/callback', 
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/dashboard');
        }
    );


    app.get('/api/logout', (req, res)=> {
        //kills the cookie
        req.logout();
        res.send(req.user);
    });

    //to check if cookie is working, spoiler alert: it is working
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
}