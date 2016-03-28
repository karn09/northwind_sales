var server = require('http').createServer();
var app = require('./app.js');
var db = require('./db');
// set {force: true} on sync if needed to generate tables from start
db.sequelize.sync()
  .then(function(db) {
    server.on('request', app);
    server.listen(3000, function() {
      console.log('3000');
    });
  })
  .catch(function(err) {
    console.log(err);
  });
