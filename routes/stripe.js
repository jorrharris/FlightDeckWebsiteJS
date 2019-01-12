const express = require("express");
const router = express.Router();
const keys = require("../keys/keys");
const stripe = require("stripe")(keys.stripeSK);

router.post("/charge", (req, res) => {
  let amount = req.body.amount;
  stripe.customers
    .create({
      email: req.body.email,
      card: req.body.id
    })
    .then(customer =>
      stripe.charges.create({
        amount,
        description: "Flight Deck Donation",
        currency: "usd",
        customer: customer.id
      })
    )
    .then(charge => res.send(charge))
    .catch(err => {
      console.log("Error:", err);
      res.status(500).send({ error: "Purchase Failed" });
    });
});

module.exports = router;
