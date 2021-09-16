const Request = require('../models/requestModel');
const mongoose = require('mongoose');

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
   
   describe('Request Schema test anything', () => {

    // the code below is for insert testing
    
     it('Add request testing anything', () => {
    
     const request = {
    
     'requestName': 'Arbin Dhakal',
     'phone': '9821898001',
     'country': 'Nepal',
     'district': 'Kathmandu',
     'street': 'Putalisadak',
      'foodtype': 'fresh',
     'date': '09/09/2021',
    
     };
    
     
    
     return Request.create(request)
    
     .then((request) => {
    
     expect(request.requestName).toEqual('Arbin Dhakal');
    
     });
    
     });
    

})