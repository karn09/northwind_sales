var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://postgres:dvorak12@localhost:5433/nw-sales');
var db = {};

var People = sequelize.define('people', {
  name: Sequelize.STRING,
  region: Sequelize.STRING
});

var Region = sequelize.define('region', {
  name: Sequelize.STRING
});

db.People = People;
db.Region = Region;
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
