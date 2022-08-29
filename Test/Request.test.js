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
    
    //  it('Add request testing anything', () => {
    
    //  const request = {
    
    //  'requestName': 'Bhumika Dhakal',
    //  'phone': '9821898001',
    //  'country': 'Nepal',
    //  'district': 'Kathmandu',
    //  'street': 'Putalisadak',
    //   'foodtype': 'fresh',
    //  'date': '09/09/2021',
    
    //  };
    
     
    
    //  return Request.create(request)
    
    //  .then((request) => {
    
    //  expect(request.requestName).toEqual('Bhumika Dhakal');
    
    //  });
    
    //  });
    
//   // the code below is for delete all insertions == testing
    
    //  it('to test the delete', async () => {
    
    //  const status = await Request.deleteMany();
    
    //  expect(status.ok).toBe(1);
    
    // });

    it('to test the update', async () => 
    { return Request.findOneAndUpdate({_id :Object('6150ac952215d926ace7729d')},
    {$set : {requestName:'Bhuwan Dhakal'}})
     .then((Request)=>{ 
        expect(Request.requestName).toEqual('Bhumika Dhakal') }) 
    });


})