const express = require('express');
const contact = require('../models/contactModel');
const router = new express.Router()
router.post('/contact', function(req,res){
    const data = new contact({
        contactname:req.body.contactname,
        email: req.body.email,
        number : req.body.number,
        message :req.body.message
     
    })
    data.save()
    .then(function(result){
        res.status(201).json({  success:"true", message:" message sent"})
    })
    .catch(function(err){
        res.status(500).json({message:err})
    })
})
module.exports = router;