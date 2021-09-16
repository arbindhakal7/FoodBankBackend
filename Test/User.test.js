const User = require('../models/userModel');

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

describe('User Schema test anything', () => {

    // the code below is for insert testing
    
     it('Add User testing anything', () => {
    
     const register = {
    
     'fullname': 'Arbin Dhakal',
     'phone': '9821898001',
     'email': 'arbin@gmail.com',
     'password': 'arbin123'
    
     };
    
     
    
     return User.create(register)
    
     .then((register_ret) => {
    
     expect(register_ret.fullname).toEqual('Arbin Dhakal');
    
     });
    
     });
    })