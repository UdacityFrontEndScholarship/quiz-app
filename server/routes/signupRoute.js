// const userController = require('../controllers/userController');

module.exports = app => {
    app.post('/', function (req, res, next) {
        /*
      Receive the credentials here and have checks
      */
        res.send('Render home page/user dashboard after successful signup');
    });
}

