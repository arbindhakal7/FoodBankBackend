const express = require('express');
const User = require('../models/userModel');
const bcrypt = require("bcryptjs");
const router = new express.Router(); //bulk export of the route
const jwt = require("jsonwebtoken")
const upload = require('../middleware/fileupload');



// Insert - post
router.post('/user/register', function (req, res) {

  // here username in req.body.username must match with json file in postman
  const fullname = req.body.fullname;
  const email = req.body.email;
  const phonenumber = req.body.phonenumber
  const password = req.body.password;

  bcrypt.hash(password, 10, function (err, hash1) {
    const data = new User({ fullname: fullname, phonenumber: phonenumber,email: email, password: hash1 });

    // var data = new Users(req.body); - this is for sending all data at the same time but can't validate

    data.save()
      .then(function (result) {
        res.status(201).json({ message: "Registered successfully" })
      })
      .catch(function (err) {
        res.status(500).json({ message: err })

      })


  })

})

router.put('/user/update', function (req, res) {

  const id = req.body.id;
  const profile_pic = req.body.profile_pic;
  Users.updateOne({ _id: id }, { profile_pic: profile_pic })
    .then(function (result) {

      res.status(201).json({ message: "Profile Pic Updated" })

    })
    .catch(function (e) {

      res.status(500).json()({ message: err })

    });
})


// Login System
router.post('/user/login', function (req, res) {

  // first we need phone number and password from client
  const email = req.body.email;
  const password = req.body.password;

  // now we need to check whether the phone number exists or not

  User.findOne({ email: email })
    .then(function (userData) {

      // all the data of user in now in the variable userData
      if (userData === null) {
        return res.status(403).json({ message: "invalid credentials" })
      }
      // valid user in terms of phone number
      // compare stored passwords with the given password
      bcrypt.compare(password, userData.password, function (err, result) {
        if (result === false) {
          // if the password is incorrect
          return res.status(403).json({ message: "invalid credentials" })
        }

        // // username and password both are correct

        // we need to create a token now

        const token = jwt.sign({ Id: userData._id }, 'anysecretkey');
        res.status(200).json({Id: userData._id ,t: token, message: "Auth Success!" })
        //here t is representative



      })

    })
    .catch(function (e) {

      res.status(500).json()({ message: err })

    });
})



// to upload a
router.post('/profile/upload', upload.single('myimage'), function (req, res) {

  if (req.file == undefined) {
    return res.status(400).json({ message: "upload" })
  }


  const data = new Users({
    profile_pic: req.file.filename
  })

  data.save()
    .then(function (result) {
      res.status(201).json({ message: "Profile pic uploaded" })

    })
    .catch(function (e) {

      res.status(500).json()({ message: err })

    });

})








module.exports = router;