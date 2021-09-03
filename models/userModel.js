const mongoose = require('mongoose');

// creating tables for users
const userSchema = new mongoose.Schema({

    fullname: {
        type: String,
        required: true

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
        required: true,
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

module.exports = mongoose.model('User', userSchema);