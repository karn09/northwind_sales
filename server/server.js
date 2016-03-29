var server = require('http').createServer();
var app = require('./app.js');
var db = require('./db');
// TODO: database initialization script with config options - THIS WILL FAIL
// unless database is created in postgres:
// CREATE DATABASE "nw-sales" -u postgres;
db.sequelize.sync({force: true}) // set {force: true} on sync if needed to generate tables from start
  .then(function(db) {
    server.on('request', app);
    server.listen(process.env.PORT || 3000, function() {
      console.log('3000');
    });
  })
  .catch(function(err) {
    console.log(err);
  });
