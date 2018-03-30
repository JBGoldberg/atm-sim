// index.js
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const SERVER_PORT = process.env.SERVER_PORT || 3000;


// *** config middleware *** //
//parse application/json and look for raw text
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: 'application/json'
}));

app.use('/', express.static('webclient'));

app.listen(SERVER_PORT, () => {
  console.log(`My API is running... on ${SERVER_PORT}`);
});

module.exports = app;