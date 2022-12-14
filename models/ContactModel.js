const mongoose = require("mongoose")
const contactSchema = new mongoose.Schema({

    fullname: {
         type: String, 
         required: true 
        },
    message: {
         type: String,
         required: true 
        },
    phone: {
         type: String,
         required: true 
         },
    email: {
        type: String,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },

})
const contact = mongoose.model('contact', contactSchema)
module.exports = contact