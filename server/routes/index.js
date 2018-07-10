var express = require('express');
var router = express.Router()
var bcrypt = require('bcrypt');
var User = require('../model/userModel');
var Newsletter = require('../model/newsletter');
var Contactform = require('../model/contactform');
var moment = require('moment')
var validator = require("express-validator")
var generator = require("generate-password")
var jwt = require('jsonwebtoken');
var formidable = require('formidable');
var fs = require("fs")
var cloudinary = require("cloudinary")
var dotenv = require('dotenv')
var Message = require("../model/message")
dotenv.config();
cloudinary.config({
  cloud_name: 'afrikal',
  api_key: '345824351715158',
  api_secret: '55TwfraW6ST15TGvq6tjHSF9NfA'
})


//nodemailer

//user login route
router.post('/api/login', function (req, res, next) {
  var { username, password } = req.body;
  var error = {}
  if (username == "") error.username = "This field is required";
  if (password == "") error.password = "This field is required";
  if (error.password || error.username) {
    return res.json({ "error": error })
  }
  var data = {
    username: username
  }
  User.findOne({
    username: username
  }).then((user) => {
    if (user) {
      data.id = user._id
      data.fullName = user.fullName,
        data.department = user.department,
        data.location = user.location,
        data.gender = user.gender,
        data.university = user.university,
        data.username = user.username,
        data.dp = user.dpUrl,
        data.regDate = user.date,
        // console.log(user)
        bcrypt.compare(password, user.password).then((valid) => {
          if (valid) {
            var token = jwt.sign(data, "h1a2b3e4e5b6").toString();
            res.header('x-auth', token).json({ "token": token });
          } else res.json({ "error":  "Please enter a valid username/password", "password": "incorrect password"  })
        }).catch((error) => (console.log(error)));
    } else res.json({ "error": "Please enter a valid username/password", "password": "incorrect password" })
  })
})

  .post("/api/signup", (req, res, next) => {
    let time = new Date();
    console.log(req.body)
    const { username, password, fullName, email, department, university ,gender} = req.body
    User.findOne({username:username}).then((user)=>{
      console.log(user)
      if(user) return res.json({error:"This username is not available"})
      User.findOne({ email: email }).then((user) => {
        if (user) return res.json({ error: { email: "This email address is not available" } })
        bcrypt.hash(password, 10).then((hash) => {

          User.create({
            username, password:hash, fullName, email, university, department,gender,
            date: time,
          })
            // newUser.save()
            .then((user) => {
              if (user) {
                console.log(user)
                const token = jwt.sign({ ...user }, "o1l2a3m4i5d6e")
                const nodemailer = require('nodemailer');

                let transporter = nodemailer.createTransport({

                  tls: {
                    rejectUnauthorized: false
                  },
                  host: 'smtp.sendgrid.net',
                  port: 465,
                  secure: true, // true for 465, false for other ports
                  auth: {
                    user: "apikey", // generated ethereal user
                    pass: process.env.SENDGRID_API_KEY // generated ethereal password
                  }
                });
                // setup email data with unicode symbols
                let mailOptions = {
                  from: '"Campus Connect 👻" <info@campusconnect.com>', // sender address
                  to: `${email}`, // list of receivers
                  subject: 'Account Registration ✔', // Subject line
                  text: 'Hello?', // plain text body
                  headers: {
                    "X-SMTPAPI": {
                      "category": [
                        "Orders"
                      ]
                    }
                  },
                  html: ' <body style="background:#f7f7f7"><div style="width:90%; background:#fff; margin:10px auto 20px;font-family:Verdana, Geneva, Tahoma, sans-serif"><div style="background:#F4EEE2; padding:10px;color:rgb(248, 150, 166)"><center><h3>Bidders</h3></center></div><div style="padding:30px"><center><p style="font-family:Verdana, Geneva, Tahoma, sans-serif"><small>Congratulations! your  account has successfully been Verified</small></p><h2>Logon to your dashboard</h2><p style="font-family:Verdana, Geneva, Tahoma, sans-serif"><small>Please click on this button below to login to your dashboard.</small></p><p style="margin: 30px"> <a href="https://Biddersserver.herokuapp.com/login" style="font-size:0.9em;text-decoration:none;color:#000;border:1px solid #777;background:transparent;padding:10px 50px;font-family:Verdana"> Login </a></p></center></div><div style="background:#eee;height:2px;margin:10px 0px"></div><div style="padding:40px 20px;font-size:0.7em;color:#bbb"><center>Questions? Get your answers here: <a href="" style="color:blue">Help Center</a></a>.</center></div></div><div style="font-size:0.7em;text-align:center;color:#bbb;width:35%;margin:auto">Atavist | Brooklyn, New York, 11201 | Copyright © 2015 | All rights reserved</div></body>' // html body
                };

                // send mail with defined transport object
                transporter.sendMail(mailOptions, (error, info) => {
                  if (error) {
                    return console.log(error);
                  }
                  console.log('Message sent: %s', info.messageId);
                  // Preview only available when sending through an Ethereal account
                  console.log(info);

                  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
                  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
                });
                // });
                res.json({ "success": "Account Created Successfully" })

              }
            }).catch((error) => { console.log(error); res.json({ error: { "server": "An error has occured" } }); })

        })
      })
    })
  
  
    // }
  })
router.post('/api/reset', (req, res) => {
  const { email } = req.body;
  let token;
  var date = new Date();
  User.findOne({ email }).then((user) => {
    if (user) {
      const password = generator.generate({
        length: 10,
        numbers: true
      });
      const hashedPassword = bcrypt.hashSync(password, 10);
      token = jwt.sign({ password: hashedPassword, email: email, date }, "o1l2a3m4i5d6e")
      const nodemailer = require('nodemailer');
      let transporter = nodemailer.createTransport({
        tls: {
          rejectUnauthorized: false
        },
        host: 'smtp.sendgrid.net',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: "apikey", // generated ethereal user
          pass: process.env.SENDGRID_API_KEY // generated ethereal password
        }
      });
      // setup email data with unicode symbols
      const message = `<h4>Hi there</h4>
            <p>You have successfully reset your password. Here is your new password for future reference: ${password}.</p>
            <p>Thank you!</p>
          `;
      const mailOptions = {
        from: `support@Bidders.com`, // sender address
        to: `${email}`, // list of receivers
        subject: `Password Reset`, // Subject line
        // text: `${message}`, // plain text body
        html: ' <body style="background:#f7f7f7"><div style="width:90%; background:#fff; margin:10px auto 20px;font-family:Verdana, Geneva, Tahoma, sans-serif"><div style="background:#F4EEE2; padding:10px;color:rgb(248, 150, 166)"><center><h3>Bidders</h3></center></div><div style="padding:30px"><center><p style="font-family:Verdana, Geneva, Tahoma, sans-serif"><small>You have successfully reset your password. Here is your new password for future reference</small></p><h2>' + password + '</h2><p style="font-family:Verdana, Geneva, Tahoma, sans-serif"><small>Please click on this button below to change your password.</small></p><p style="margin: 30px"> <a href="https://Bidders.com/reset_password/' + token + '" style="font-size:0.9em;text-decoration:none;color:#000;border:1px solid #777;background:transparent;padding:10px 50px;font-family:Verdana"> Change your password</a></p></center></div><div style="background:#eee;height:2px;margin:10px 0px"></div><div style="padding:40px 20px;font-size:0.7em;color:#bbb"><center>Questions? Get your answers here: <a href="www.Bidders.com/faq" style="color:blue">Help Center</a></a>.</center></div></div><div style="font-size:0.7em;text-align:center;color:#bbb;width:35%;margin:auto"> All rights reserved</div></body>' // html body
        // html body

      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          res.json({ "error": "Please try again later." })
        } else {
          console.log(info)
          User.findOneAndUpdate({ email }, { password: hashedPassword }).then((pass) => {
            if (pass) {
              res.json({ "success": "Your password has been reset successfully. Please check your inbox" })
            }
          })
        }
        // Preview only available when sending through an Ethereal account

      })
    } else res.json({ error: "Please try again later" })
  }

  );
})
router.post('/api/editprofile', function (req, res, next) {
  let {  firstName, lastName, phone,city,state,dob, token } = req.query;
  let time = new Date();
  let data = {}
  if (fullName !== "") data.fullName = fullName
  if (phone !== "") data.phone = phone
  if (city !== "") data.city = city
  if (state !== "") data.state = state
  if (dob !== "") data.dob = dob
  if (location !== "") data.location = location
  if (about !== "") data.about = about
  if (bio !== "") data.bio = bio
  let userData = jwt.decode(token)
  data.userid = userData.id;
  data.time = time;
  console.log(data)
  User.findOneAndUpdate({ userid: userData.id }, data).then((user) => {
    if (user) {
      res.json({ "success": "Contact form modified successfully" })
    } else {
      var newForm = new Contactform(data);
      newForm.save().then((user) => {
        if (user) res.json({ "success":"Contact form Created Successfully" })
      }).catch((error) => { console.log(error); res.json({ error:"An error has occured" }); })
    }
  }).catch((err) => { res.json({ error: "An error has occured. Please try again later"  }); console.log(err) })


})
router.post('/api/resetpassword', (req, res) => {
  const { token, cpassword } = req.body;
  var userData = jwt.decode(token, "o1l2a3m4i5d6e")
  var date = new Date();
  var time1 = moment(date).add(5, "minutes")
  if (moment(userData.date).isBefore(date)) {
    if (jwt.verify(token, "o1l2a3m4i5d6e"));
    User.findOne({ email: userData.email, password: userData.password }).then((user) => {
      if (user) {
        const hashedPassword = bcrypt.hashSync(cpassword, 10);

        User.findOneAndUpdate({ email: userData.email }, { password: hashedPassword }).then((pass) => {
          if (pass) {
            res.json({ "success": "Your password has been reset successfully. You can now login" })
          }
        })

      } else res.json({ error: "You are not authorize to perform this action" })
    })
  } else res.json({ error: "This link has expired" })

})
router.post('/api/subscribe', (req, res) => {
  const { email, firstName, lastName, country } = req.body;
  console.log(req.body)
  Newsletter.findOne({ email }).then((user) => {
    if (user) {
      res.json({ error: "You are already on a subscription" })
    } else {
      Newsletter.create({ email, firstName, lastName, country }).then((suc) => { if (suc) res.json({ success: "Your subscription was successful" }); else res.json({ error: "Please try again later" }) })
    }
  }

  );
})
//check for available email
router.post('/api/checkEmail', (req, res, next) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      res.json({ "error": { "email": req.body.email + " is not available" } })
    } else res.json({ "success": { "email": "This email address is available" } })

  }).catch((err) => res.json({ "error": { "email": "an error has occured" } }))
})
router.post('/api/checkUsername', (req, res, next) => {
  User.findOne({ username: req.body.username }).then((user) => {
    if (user) {
      res.json({ "uerror": req.body.username + " is not available" })
    } else res.json({ "usuccess": "This username is available" })

  }).catch((err) => res.json({ "uerror": "an error has occured" }))
})
router.get("/api/getusers", (req, res, next) => {
  console.log("users")

  User.find().then((users) => {
    if (users) {

      res.json({ users: users })
    } else (res.json({ empty: "There are no users available" }))
  }).catch((err) => console.log(err))
})
router.get("/api/getuserbyid", (req, res, next) => {
  User.findOne({username:req.query.id}).then((users) => {
    if (users) {

      res.json({ user: users })
    } else (res.json({ empty: "this  is not available" }))
  }).catch((err) => console.log(err))
})
router.get("/api/dashboard", (req, res, next) => {
  User.findById(req.query.id).then((users) => {
    if (users) {

      res.json({ user: users })
    } else (res.json({ empty: "this  is not available" }))
  }).catch((err) => console.log(err))
})
router.post("/api/grabmessages", (req, res, next) => {
  Message.findOne({party:req.body.party}).then((mesg) => {
    if(mesg)  res.json({ mesg:mesg,success:true }); else res.json({success:false})
  }).catch((err) => console.log(err))
})
router.post("/api/conversation", (req, res, next) => {
  var allmesg=[];
  Message.find({ user1: req.body.username }).then((mesg) => {
    Message.find({ user2: req.body.username }).then((mesg2) => {
     allmesg= mesg.concat(mesg2)
      console.log(allmesg)
      res.json({ allmesg: allmesg});
    })
  })
})
  .get("/api/search", (req, res, next) => {
    var searchText = `${req.query.name}`
    console.log(req.query)
    User.find({ $text: { $search: searchText }}, { score: { $meta: 'textScore' } }).sort({ score: { $meta: 'textScore' } }).then((data) => { if (data) res.json({ result: data }) })
    .catch((err)=>console.log(err))

  })
   .get("/api/relatedusers", (req, res, next) => {
    var searchText = `${req.query.dept} ${req.query.uni}`
    console.log(req.query)
    User.find({ $text: { $search: searchText }}, { score: { $meta: 'textScore' } }).sort({ score: { $meta: 'textScore' } }).then((data) => { if (data) res.json({ result: data }) })

  })
  //request from dashboard

  
  .post('/api/uploadDp', (req, res, next) => {
    var newform = new formidable.IncomingForm();
    newform.keepExtensions = true;
    newform.parse(req, (err, fields, files) => {
      cloudinary.uploader.upload(files.dp.path, function (result) {
        if (result.url) {
          let userData = jwt.decode(fields.token)
          var publicid = result.public_id + "." + result.format
          User.findByIdAndUpdate(userData.id, { dpUrl: result.url, dpID: publicid }).then((success) => { res.json({ dpUrl: result.url }); })
        } else {
          res.json({ error: "Error uploading to cloudinary" }); console.log("error uploading to cloudinary")
        }
      })
    })
  })
  .post('/api/uploadBgPic', (req, res, next) => {
    var newform = new formidable.IncomingForm();
    newform.keepExtensions = true;
    newform.parse(req, (err, fields, files) => {
      cloudinary.uploader.upload(files.bgPic.path, function (result) {
        if (result.url) {
          let userData = jwt.decode(fields.token)
          var publicid = result.public_id + "." + result.format
          User.findByIdAndUpdate(userData.id, { bgUrl: result.url, bgID: publicid }).then((success) => { res.json({ dpUrl: result.url }) })
        } else {
          res.json({ error: "Error uploading to cloudinary" }); console.log("error uploading to cloudinary")
        }
      })
    })
  })
  .post('/api/uploadVideo', (req, res, next) => {
    var newform = new formidable.IncomingForm();
    newform.keepExtensions = true;
    newform.parse(req, (err, fields, files) => {

      let errorFields = {}
      if (fields.title === "") errorFields.title = "This field is required";
      if (fields.description === "") errorFields.description = "This field is required";
      if (errorFields.title || errorFields.description) res.json({ error: { title: errorFields.title, description: errorFields.description } });
      else if (files.video)
        cloudinary.v2.uploader.upload(files.video.path, { resource_type: "video" }, function (error, result) {
          if (result) {

            let userData = jwt.decode(fields.token)
            let time = new Date();
            let uploadedVideo = new Video({
              userID: userData.id,
              videoUrl: result.url,
              date: time,
              title: fields.title,
              dpUrl: userData.dpUrl,
              description: fields.description,
              industry: userData.industry
            });
            uploadedVideo.save().then().then((success) => { res.json({ url: result.url, success: "uploaded successfully" }) })
          } else {

            res.json({ error: { server: "Error uploading file" } }); console.log("error uploading to cloudinary")
          }
          // Picture.update({ userID: userData.id, url: result.url })
        }); else res.json({ error: { server: "Please choose a file to upload" } });
    })
  })
  .post('/api/uploadAudio', (req, res, next) => {
    var newform = new formidable.IncomingForm();
    newform.keepExtensions = true;
    newform.parse(req, (err, fields, files) => {

      let errorFields = {}
      if (fields.name === "") errorFields.name = "This field is required";
      if (fields.description === "") errorFields.description = "This field is required";
      if (errorFields.name || errorFields.description) res.json({ error: { name: errorFields.name, description: errorFields.description } });
      else if (files.audio)
        cloudinary.v2.uploader.upload(files.audio.path, { resource_type: "video" }, function (error, result) {
          if (result) {
            let userData = jwt.decode(fields.token)
            let time = new Date();
            let uploadedAudio = new Audio({
              userID: userData.id,
              src: result.url,
              date: time,
              name: fields.name,
              img: userData.dpUrl,
              description: fields.description,
              industry: userData.industry
            });
            uploadedAudio.save().then().then((success) => { res.json({ url: result.url, success: "uploaded successfully" }) })
          } else {
            res.json({ error: { server: "Error uploading file" } }); console.log("error uploading to cloudinary")
          }
          // Picture.update({ userID: userData.id, url: result.url })
        }); else res.json({ error: { server: "Please choose a file to upload" } });
    })
  })
  .post('/api/uploadProduct', (req, res, next) => {
    var newform = new formidable.IncomingForm();
    newform.keepExtensions = true;
    newform.parse(req, (err, fields, files) => {
      console.log(fields)
      let errorFields = {}
      if (fields.title === "") errorFields.title = "This field is required";
      if (fields.price === "") errorFields.price = "This field is required";
      // if (fields.billing === "") errorFields.billing = "This field is required";
      if (fields.phone === "") errorFields.phone = "This field is required";
      if (fields.stock === "") errorFields.stock = "This field is required";
      if (fields.email === "") errorFields.email = "This field is required";
      if (fields.description === "") errorFields.description = "This field is required";
      if (errorFields.title || errorFields.price || errorFields.description) res.json({ error: { title: errorFields.title, price: errorFields.price, description: errorFields.description } });
      else if (files.product)
        cloudinary.uploader.upload(files.product.path, function (result) {
          if (result.url) {
            let userData = jwt.decode(fields.token)
            let time = new Date();
            var publicid = result.public_id + "." + result.format

            let uploadedProduct = new Product({
              userID: userData.id,
              imgUrl: result.url,
              imgID: publicid,
              date: time,
              title: fields.title,
              dpUrl: userData.dpUrl,
              price: fields.price,
              description: fields.description,
              // billing: fields.billing,
              phone: fields.phone,
              stock: fields.stock,
              email: fields.email,
              industry: userData.industry
            });
            uploadedProduct.save().then().then((success) => { res.json({ url: result.url, success: "uploaded successfully" }) })
          } else {
            res.json({ error: { server: "Error uploading file" } }); console.log("error uploading to cloudinary")
          }
          // Picture.update({ userID: userData.id, url: result.url })
        }); else res.json({ error: { server: "Please choose a file to upload" } });
    })
  })
  .post('/api/uploadEvent', (req, res, next) => {
    var newform = new formidable.IncomingForm();
    newform.keepExtensions = true;
    newform.parse(req, (err, fields, files) => {
      console.log(fields)
      let errorFields = {}
      if (fields.title === "") errorFields.title = "This field is required";
      // if (fields.link === "") errorFields.link = "This field is required";
      if (fields.location === "") errorFields.location = "This field is required";
      if (fields.description === "") errorFields.description = "This field is required";
      if (fields.startTime === "") errorFields.startTime = "This field is required";
      if (fields.stopTime === "") errorFields.stopTime = "This field is required";
      if (errorFields.title || errorFields.location || errorFields.description || errorFields.stopTime || errorFields.startTime) res.json({ error: { title: errorFields.title, location: errorFields.location, description: errorFields.description } });
      else if (files.event)
        cloudinary.uploader.upload(files.event.path, function (result) {
          if (result.url) {
            // let day = moment(fields.checkedDate).date(); let month = moment(fields.checkedDate).month() + 1;
            let customDate = moment(fields.checkedDate).format("l")
            let userData = jwt.decode(fields.token)
            let time = new Date();
            var publicid = result.public_id + "." + result.format

            let UploadEvent = new Event({
              userID: userData.id,
              date: time,
              title: fields.title,
              imgUrl: result.url,
              imgID: publicid,
              ticket: fields.link,
              location: fields.location,
              description: fields.description,
              address: fields.address,
              startTime: fields.startTime,
              stopTime: fields.stopTime,
              checkedDate: fields.checkedDate,
              customDate: customDate,
              industry: userData.industry
            });

            UploadEvent.save().then().then((success) => { res.json({ url: result.url, success: "Event created successfully" }) })
          } else {
            res.json({ error: { server: "Error creating an event" } }); console.log("error uploading to cloudinary")
          }
          // Picture.update({ userID: userData.id, url: result.url })
        }); else res.json({ error: { server: "Please choose a file to upload" } });
    })
  })

  .post('/api/uploadPictures', (req, res, next) => {
    var newform = new formidable.IncomingForm();
    newform.keepExtensions = true;
    newform.parse(req, (err, fields, files) => {
      let errorFields = {}
      if (fields.caption === "") errorFields.caption = "This field is required";
      if (errorFields.caption) res.json({ error: { caption: errorFields.caption } });
      else if (files.picture)
        cloudinary.uploader.upload(files.picture.path, function (result) {
          if (result.url) {
            let userData = jwt.decode(fields.token)
            let time = new Date();
            var publicid = result.public_id + "." + result.format
            let uploadedPicture = new Picture({
              userID: userData.id,
              imgUrl: result.url,
              imgID: publicid,
              date: time,
              caption: fields.caption,
              description: fields.description
            });
            uploadedPicture.save().then().then((success) => { res.json({ url: result.url, success: "uploaded successfully" }) })
          } else {
            res.json({ error: { server: "Error uploading the image" } }); console.log("error uploading to cloudinary")
          }
          // Picture.update({ userID: userData.id, url: result.url })
        }); else res.json({ error: { server: "Please choose an image to upload" } });
    })
  })
module.exports = router;
