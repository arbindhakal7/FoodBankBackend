const mongoose = require("mongoose");
const FoodBank = require("../models/FoodBank");

// use the new name of the database

const url = "mongodb://localhost:27017/foodbank_test";

beforeAll(async () => {
  await mongoose.connect(url, {
    useNewUrlParser: true,

    useCreateIndex: true,
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("FoodBank Schema test anything", () => {
  // the code below is for insert testing
   it('Add request testing anything', () => {
   const foodbank = {
   'FoodBankName': 'SHANDARVA CHARITY',
   'phone': '9829091001',
   'address': 'Kathmandu'
   };
   return FoodBank.create(foodbank)
   .then((foodbank) => {
   expect(foodbank.FoodBankName).toEqual('SHANDARVA CHARITY');
   });
   });
  // the code below is for delete all insertions == testing
   it('to test the delete', async () => {
      const status = await FoodBank.deleteMany();
      expect(status.ok).toBe(1);
     });
  //    it('to test the update', async () =>
  //    { return FoodBank.findOneAndUpdate({_id :Object('614f25b2726b1653c800aca8')},
  //    {$set : {address:'Palpa'}})
  //     .then((FoodBank)=>{
  //        expect(FoodBank.address).toEqual('Kathmandu') })
  //    });
});
