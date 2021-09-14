const Donate = require('../models/donateModel');

const mongoose = require('mongoose');
const donateModel = require('../models/donateModel');

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


describe('Donation Schema test anything', () => {

    // the code below is for insert testing
    
     it('Add donation testing anything', () => {
    
     const donation = {
    
     'donorName': 'Arbin Dhakal',
     'phone': '9821898001',
     'country': 'Nepal',
     'district': 'Kathmandu',
     'street': 'Putalisadak',
      'foodtype': 'fresh',
     'date': '09/09/2021',
    
     };
    
    
     return Donate.create(donation)
    
     .then((donate_ret) => {
    
     expect(donate_ret.donorName).toEqual('Arbin Dhakal');
    
     });
    
     });
    

})