const express = require('express');
const contact = require('../models/ContactModel');
const router = new express.Router()

router.route('/')
    .get((req, res, next) => {
        contact.find()
            .then(messages => {
                res.setHeader('Content-Type', 'application/json');
                res.json(messages);
            }).catch(next);
    })
    .post((req, res, next) => {
        let { fullname, phone, email, message } = req.body;
        contact.create({ fullname, phone, email, message })
            .then(messages => {
                res.status(201).json(messages);

            }).catch(err => next(err));
    })

router.route('/:contact_id/status')
    .get((req, res, next) => {
        contact.findById(req.params.contact_id)
            .then(contact => {
                res.json(contact.Status);
            }).catch(next);
    })

    .put((req, res, next) => {
        contact.findByIdAndUpdate(req.params.contact_id, { $set: { status: req.body.status } }, { new: true })
            .then(messages => {
                res.json(messages);
            }).catch(next);
    })

module.exports = router;