const mongoose = require('mongoose');

const charitySchema = new mongoose.Schema({
    charityName:{
        type: String,
        required: true
    },
    availableFood:{
        type: String,
        required: false
    },
    donations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DonateFood'
    }],
    users:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    requests:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'RequestFood'
    }]
},{timestamps:true});

module.exports = mongoose.model('Charity', charitySchema )

