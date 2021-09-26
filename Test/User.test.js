const User = require("../models/userModel");

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

describe("User Schema test anything", () => {
  // the code below is for insert testing

  it("Add User testing anything", () => {
    const register = {
      fullname: "Arbin Dhakal",
      phone: "9821898001",
      email: "arbin@gmail.com",
      password: "arbin123",
    };

    return User.create(register)
    .then((register_ret) => {
      expect(register_ret.fullname).toEqual("Arbin Dhakal");
    });
  });

  // the code below is for delete all insertions == testing

  it("to test the delete", async () => {
    const status = await User.deleteMany();

    expect(status.ok).toBe(1);
  });

  it("to test the update", async () => {
    return User.findOneAndUpdate(
      { _id: Object("614e07001ac3b903c082dbaa") },
      { $set: { fullname: "Aayush Dhakal" } }
    ).then((User) => {
      expect(User.fullname).toEqual("Arbin Dhakal");
    });
  });
});
