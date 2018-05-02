const userController = require('../controllers/userController');

module.exports = app => {
    app.get('/', function (req, res, next) {
        /*
        Validate the user in DB using the credentials received
        */
        res.send('Render home page/user dashboard after login here');
    });
    app.post('/', functoin(req, res, next){

    });
}
