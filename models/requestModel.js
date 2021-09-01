const mongoose = require('mongoose');
const requestSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    
    requestName:{
        type: String,
        required: true
    },

    
    foodtype:{
        type: String,
        default: false,
        enum: ['fresh','stored', 'cooked', 'any of the above']
    },
    
    phone:{
        type: String,
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

module.exports = mongoose.model('RequestFood',requestSchema )

