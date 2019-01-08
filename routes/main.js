const express = require("express");
const router = express.Router();
const Spotify = require("../spotify");
const spotify = new Spotify("Flight Deck", "5ADZ1KqGgl7gP0lQAhbVKN");
const keys = require("../keys/keys");

//for emailing with sendgrid
const nodemailer = require("nodemailer");
var sgTransport = require("nodemailer-sendgrid-transport");

var options = {
  auth: {
    api_user: keys.SENDGRID_USERNAME,
    api_key: keys.SENDGRID_PASSWORD
  }
};

var client = nodemailer.createTransport(sgTransport(options));

// @route   GET /api/get-latest
// @desc    Get Latest Artist Releases
// @access  Public
router.get("/get-latest", (req, res) => {
  spotify.getAlbums().then(tracks => res.json(tracks));
});

router.post("/send-mail", (req, res) => {
  var email = {
    from: "contact@flightdeckmusic.com",
    to: "flightdeckbnd@gmail.com",
    subject: req.body.subject,
    text: "",
    html:
      "From: " +
      req.body.email +
      "<br/>" +
      "Name: " +
      req.body.name +
      "<br/>" +
      req.body.text
  };

  client.sendMail(email, function(err, info) {
    if (err) {
      console.log(error);
    } else {
      res.send("success: email sent");
    }
  });
});

module.exports = router;
