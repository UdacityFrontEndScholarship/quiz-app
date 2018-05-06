const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    gender: String,
    fullName: String,
    firstName: String,
    lastName : String,
    image: String,
    email : String
});


mongoose.model('users', userSchema);