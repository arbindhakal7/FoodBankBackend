const mongoose = require('mongoose');

const donateSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'    
    },

    Phone:{
        type: String,
        required: true
    },

    foodtype:{
        type: String,
        default: false,
        enum: ['fresh','stored', 'cooked', 'any of the above']
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
    }

})

module.exports = mongoose.model('DonateFood', donateSchema );