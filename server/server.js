var server = require('http').createServer();
var app = require('./app.js');
var db = require('./db');

db.sequelize.sync({force: true})
  .then(function(db) {
    server.on('request', app);
    server.listen(3000, function() {
      console.log('3000');
    });
  })
  .catch(function(err) {
    console.log(err);
  });
