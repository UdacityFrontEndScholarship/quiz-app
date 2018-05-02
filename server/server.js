const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport =  require('passport');
const path = require('path');
const keys = require('./config/keys');

//importing the mongoose config
require('./models/Users');

//importing the google strategy
require('./services/passport');

//connecting db
mongoose.connect(keys.mongoURI);

const app = express();

// require('./routes/loginRoute')(app);
// require('./routes/logoutRoute')(app);
// require('./routes/signupRoute')(app);

//cookie session for 30 days
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

//running the authentication routes
require('./routes/authRoutes')(app);



//assigning Port
const PORT = process.env.PORT || "5000";



//for static homepage

//middleware
app.use(express.static(path.join(__dirname + '/../build')));
app.get("/", (req, res) => { 
    res.sendFile(path.join(__dirname, '/../build/index.html')); 
});


app.listen(PORT, () => {
    console.log(`Server running at Port ${PORT}`);
});