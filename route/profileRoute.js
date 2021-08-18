const express = require('express');
const router = express.Router();
const User = require('../models/userModel')

router.route('/:user_id')
.get((req,res,next)=>{
    User.findById(req.params.user_id)
    .then(user=>{
        res.status(200).json(user);
    }).catch(next);
})
.put((req,res,next)=>{
    User.findByIdAndUpdate(req.params.user_id,
        {$set: req.body},{new: true})
        .then(updateduser=> {
            res.json(updateduser);
        }).catch(next);
    })

module.exports = router;