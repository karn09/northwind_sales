var Sequelize = require('sequelize');
var dbPass = '';
var dbHost = '@localhost:5433/nw-sales';
var sequelize = new Sequelize('postgres://postgres:' + dbPass + dbHost);
var db = {};

var People = sequelize.define('people', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      checkName: function(value) {
        value = value.trim();
        var regex = /[a-zA-Z]+\s[a-zA-Z]+/;
        // FIXME: this will make sure that values
        if (!regex.test(value) || value.length === 0) {
          throw new Error('Name must be in format: "Firstname Lastname"');
        }
        return value;
      }
    }
  },
  regions: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    unique: false,
    allowNull: false,
    validate: {
      checkRegions: function(value) {
        // TODO currently regions are hardcoded, create a new table with region
        // and validate from this table instead
        var regions = ['North', 'East', 'South', 'West'];
        var values = (Array.isArray(value)) ? value : [value];
        // if (values.length === 0) {
        //   throw new Error('You must specify a region.');
        // }
        if (values.length > 3) {
          throw new Error('Cannot select more than three regions');
        }
        values.forEach(function(val) {
          if (regions.indexOf(val) === -1) {
            throw new Error('Invalid regions selected.');
          }
        });
        return value;
      }
    }
  }
});

// TODO define a separate region model to add/remove regions
// var Region = sequelize.define('region', {
//   name: Sequelize.STRING
// });

db.People = People;
// db.Region = Region;
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
