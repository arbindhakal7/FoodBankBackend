const express = require('express');

const router = express.Router();
const DonateFood = require('../models/donateModel')

router.route('/')
    .get((req, res, next) => {
        DonateFood.find({ user: req.user.id })
            .then(donations => {
                res.setHeader('Content-Type', 'application/json');
                res.json(donations);
            }).catch(next);
    })
    .post((req, res, next) => {
        let { donorName, foodtype, phone, country, district, street, date } = req.body;
        DonateFood.create({ user: req.user.id, donorName, foodtype, country, district, street, phone, date })
            .then(Donation => {
                res.status(201).json(Donation);

            }).catch(err => next(err));
    })

    .delete((req, res, next) => {
        DonateFood.deleteMany({ user: req.user.id })
            .then(reply => {
                res.json(reply);
            }).catch(next);
    });
router.route('/:donation_id')
    .get((req, res, next) => {
        DonateFood.findById(req.params.donation_id)
            .then(Donation => {
                res.json(Donation);
            }).catch(next);
    })
    .put((req, res, next) => {
        DonateFood.findByIdAndUpdate(req.params.donation_id,
            {
                $set: {
                    phone: req.body.phone,
                    donorName: req.body.donorName,
                    country: req.body.country,
                    district: req.body.district,
                    street: req.body.street,
                    foodtype: req.body.foodtype,
                    date: req.body.date
                }
            }, { new: true })
            .then(updatedDonation => {
                res.json(updatedDonation);

            }).catch(next);
    })

    .delete((req, res, next) => {
        DonateFood.deleteOne({ _id: req.params.donation_id })
            .then(reply => {
                res.json(reply);
            }).catch(next);
    })





module.exports = router;