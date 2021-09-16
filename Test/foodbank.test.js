const mongoose = require('mongoose');
const FoodBank = require('../models/FoodBank');

// use the new name of the database

const url = 'mongodb://localhost:27017/foodbank_test';

beforeAll(async () => {

 await mongoose.connect(url, {

 useNewUrlParser: true,

 useCreateIndex: true

 });

});

afterAll(async () => {

 await mongoose.connection.close();

});