const express = require('express');
const router = express.Router();
const FoodBank = require('../models/FoodBank');
const { verifyAdmin } = require('../middleware/auth');


router.route('/')
.get((req, res, next)=> {
    FoodBank.find()
    .then(donations=>{
        res.json(donations)
    }).catch(next);
})
.post(verifyAdmin, (req,res,next)=>{
    let {FoodBankName, address, phone, donations, requests } = req.body;
    FoodBank.create({FoodBankName, address, phone, donations, requests })
    .then(foodBank=> {
        res.status(201).json(foodBank)
    }).catch(next);
    
})

router.route('/:foodBank_id')
.get(verifyAdmin,(req, res, next)=> {
    FoodBank.findById(req.params.foodBank_id)
    .then(foodBank=>{
        res.status(201).json(foodBank);
    }).catch(next);
})
.put(verifyAdmin, (req, res, next)=> {
    FoodBank.findOneAndUpdate(req.params.foodBank_id,
        {$set: req.body}, {new: true})
    .then(updateDetails => {
        res.json(updateDetails);
    }).catch(next)
})
.delete(verifyAdmin, (req, res, next)=> {
    FoodBank.deleteOne({_id:req.params.foodBank_id})
    .then(reply=> {
        res.json(reply);
    }).catch(next);
})

module.exports = router;
