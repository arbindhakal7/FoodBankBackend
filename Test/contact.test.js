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

  it("Add contacts testing anything", () => {
    const contact = {
      fullname: "Arbin Dhakal",
      phone: "9821898001",
      email: "arbn@gmail.com",
      message: "Update to donation process would be nice!!!",
    };

    return Contact.create(contact)
    .then((contact_ret) => {
      expect(contact_ret.fullname).toEqual("Arbin Dhakal");
    });
  });

  // the code below is for delete all insertions == testing

  //      it('to test the delete', async () => {

  //     //  const status = await Contact.deleteMany();
  //      const status = await Contact.deleteOne({_id: Object('614b5297704ed53e849c770e')});

  //      expect(status.ok).toBe(1);

  //     });

  //     it('to test the update', async () =>
  //     { return Contact.findOneAndUpdate({_id :Object('614e07001ac3b903c082dbaa')},
  //     {$set : {fullname:'Aayush Dhakal'}})
  //      .then((Contact)=>{
  //         expect(Contact.fullname).toEqual('Arbin Dhakal') })
  //     });
});
