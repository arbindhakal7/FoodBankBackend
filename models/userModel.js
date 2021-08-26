const mongoose = require('mongoose');

// creating tables for users
const userSchema = new mongoose.Schema({

    username: {
        type: String
    },

    email: {
        type: String,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']

    },

    phone: {
        type: String
    },

    password: {
        type: String
    },

    address: {
        type: String
    },

    gender: {
        type: String,
        enum: ['Male', 'Female', 'Others']
    },

    profile_pic: {
        type: String
    },

    userType: {
        type: String,
        enum: ['Admin', 'user'],
        default: 'user'
    }


})

// table name is Users
const user = mongoose.model('User', userSchema);

module.exports = user;