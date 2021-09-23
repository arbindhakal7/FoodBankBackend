const express = require('express');
const contact = require('../models/ContactModel');
const router = new express.Router()

router.route('/')
.get((req, res, next)=>{
    contact.find()
    .then(messages => {
        res.setHeader('Content-Type', 'application/json');
        res.json(messages);
    }).catch(next);
})
.post((req, res, next)=> {
    let {fullname, phone, email, message} = req.body;
    contact.create({ fullname, phone, email, message})
.then( messages => {
    res.status(201).json(messages);
 
}).catch(err => next(err));
})

module.exports = router;