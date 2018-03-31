
const express = require('express');
const router = express.Router();

const converter = require('./helper/convertions');

const Atm = require('./models/atm')
var atm = new Atm();

const checkStatus = function (req, res) {

  console.info(`Operation: Check status`);

  return res.status(201).json({
    status: "waiting-for-requests"
  });
}

const atmWithdraw = function (req, res) {

  console.info(`Operation: Withdraw`, req.query.amount);

  let money;
  try {

    let _amount = parseInt(req.query.amount);
    money = atm.withdraw(_amount);

  } catch (exception) {

    let errorCode =  500;
    switch(exception) {
      case 'NoteUnavailableException':
      errorCode = 406;
      break;

      case 'InvalidArgumentException':
      errorCode = 400;
      break;
    }

    return res.status(errorCode).json({
      exception: exception
    });
  }

  return res.status(201).json({
    money: converter.map2json(money)
  });
}

router.get("/atm/", checkStatus);

router.get("/atm/withdraw", atmWithdraw);

module.exports = router
