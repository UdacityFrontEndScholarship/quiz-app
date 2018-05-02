const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String
    // username: {
    //     type: String,
    //     required: true
    // },
    // password: {
    //     type: String
    // },
    // email: {
    //     unique: true,
    //     required: true,
    //     type: String
    // },
    // mobile: {
    //     type: String
    // }
});


mongoose.model('users', userSchema);