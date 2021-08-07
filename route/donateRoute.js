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

.delete((req, res,next) => {
    DonateFood.deleteMany({user: req.user.id})
    .then(reply=> {
        res.json(reply);
    }).catch(next);
});
router.route('/:donation_id')
.get((req,res,next) => {
    DonateBlood.findById(req.params.donation_id)
    .then(Donation => {
        res.json(Donation);
    }).catch(next);
})
.put((req,res,next) => {
    DonateFood.findByIdAndUpdate( req.params.donation_id,
        {$set: {phone: req.body.phone, 
            country: req.body.country, 
            district: req.body.district, 
            street: req.body.street, 
            foodtype: req.body.foodtype
         }},{new: true})
    .then(updatedDonation => {
        res.json(updatedDonation);

    }).catch(next);
})

.delete((req, res, next) => {
    DonateFood.deleteOne({_id:req.params.donation_id})
    .then(reply => {
        res.json(reply);
    }).catch(next);
})





module.exports = router;