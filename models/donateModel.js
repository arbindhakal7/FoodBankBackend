const mongoose = require('mongoose');

const donateSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'    
    },

    phone:{
        type: String,
        required: true
    },

    foodtype:{
        type: String,
        enum: ['fresh','stored', 'cooked', 'any'],
        default: 'any'
    },

    foodimage:{
        type:String
    },
   
    country:{
        type:String,
        required: true
    },

    district:{
        type: String,
        required: true
    },

    street: { 
        type: String,
        required: true
    },
    
    date: {
        type: String,
        required: true
    }

},{timestamps: true});

module.exports = mongoose.model('DonateFood', donateSchema );