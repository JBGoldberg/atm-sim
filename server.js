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

app.use('/', express.static('webclient/dist'));

// CORS config
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET, PATCH");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

// *** main routes *** //
const atmRoutes = require('./api');
app.use('/api/', atmRoutes);

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500).json({
    message: err.message,
    error: err
  });
  return;
});

app.listen(SERVER_PORT, () => {
  console.log(`My API is running... on ${SERVER_PORT}`);
});

module.exports = app;