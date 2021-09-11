const mongoose = require('mongoose');

const donateSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'    
    },

    donorName:{
        type: String,
        required: true
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

    status:{
        type: String,
        required: false,
        enum: ['donated', 'on the way', 
        'stocked']
    },
    
    date: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('DonateFood', donateSchema );