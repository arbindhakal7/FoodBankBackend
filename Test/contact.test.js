const Contact = require("../models/ContactModel");

const mongoose = require("mongoose");

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

 describe("Contact Schema test anything", () => {
  // the code below is for insert testing

  // it("Add contacts testing anything", () => {
  //   const contact = {
  //     fullname: "Kiran Dhakal",
  //     phone: "9821898001",
  //     email: "arbn@gmail.com",
  //     message: "Update to donation process would be nice!!!",
  //   };

  //   return Contact.create(contact)
  //   .then((contact_ret) => {
  //     expect(contact_ret.fullname).toEqual("Kiran Dhakal");
  //   });
  // });

  // the code below is for delete all insertions == testing

      //  it('to test the delete', async () => {

      //  const status = await Contact.deleteMany();
      // //  const status = await Contact.deleteOne({_id: Object('615088f7968b983b948698a0')});

      //  expect(status.ok).toBe(1);

      // });

      it('to test the update', async () =>
      { return Contact.findOneAndUpdate({_id :Object('6150ac95ab3dac04c4299fa5')},
      {$set : {fullname:'Aayush Dhakal'}})
       .then((Contact)=>{
          expect(Contact.fullname).toEqual('Kiran Dhakal') })
      });
 });
