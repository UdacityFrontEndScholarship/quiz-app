// const userController = require('../controllers/userController');

module.exports = app => {
    app.get('/', function (req, res,next) {
        /*
        Log out the user by making changes to DB
        */
        res.send('Redirect to welcome page here');
    });
}

