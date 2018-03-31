
const express = require('express');
const router = express.Router();

const OBJECT_NAME = "ATM";

const atm = require('./models/atm')

checkStatus = function(req, res) {

    console.info(`${OBJECT_NAME}: Check status`);

    return res.status(201).json({
      status: "waiting-for-requests"
    });
}

router.get("/atm/",checkStatus);

module.exports = router
