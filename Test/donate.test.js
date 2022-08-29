const Donate = require("../models/donateModel");

const mongoose = require("mongoose");
const donateModel = require("../models/donateModel");

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

describe("Donation Schema test anything", () => {
  // the code below is for insert testing

  // it("Add donation testing anything", () => {
  //   const donation = {
  //     donorName: "RamNarayan Dhakal",
  //     phone: "9821898001",
  //     country: "Nepal",
  //     district: "Kathmandu",
  //     street: "Balaju",
  //     foodtype: "fresh",
  //     date: "09/09/2021",
  //   };

  //   return Donate.create(donation)
  //   .then((donate_ret) => {
  //     expect(donate_ret.donorName).toEqual("RamNarayan Dhakal");
  //   });
  // });

  // the code below is for delete all insertions == testing

  // it("to test the delete", async () => {
  //     const status = await Donate.deleteMany();
    
  //   });

  //   expect(status.ok).toBe(1);
  // });

  it('to test the update', async () =>
  { return Donate.findOneAndUpdate({_id :Object('6150ac957ee88b1544bfc385')},
  {$set : {donorName:'Aayush Dhakal'}})
   .then((Donate)=>{
      expect(Donate.donorName).toEqual('RamNarayan Dhakal') })
  });
});
