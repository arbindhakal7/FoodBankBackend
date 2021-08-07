const express = require('express');

const router = express.Router();
const DonateFood = require('../models/donateModel')


router.route('/')
.get((req, res, next)=>{
    DonateFood.find()
    .then(donations=> {
        res.setHeader('Content-Type', 'application/json');
        res.json(donations);
    }).catch(next);
})
.post((req, res, next)=> {
    let {foodtype, phone, country, district, street} = req.body;
    DonateFood.create({ user: req.user.id, foodtype, country, district, street, phone})
.then( Donation => {
    res.status(201).json(Donation);

}).catch(err => next(err));
})


module.exports = router;