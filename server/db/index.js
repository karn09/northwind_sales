var Sequelize = require('sequelize');
var dbPass = '';
var dbHost = '@localhost:5433/nw-sales';
var sequelize = new Sequelize('postgres://postgres:' + dbPass + dbHost);
var db = {};
var People = sequelize.define('people', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      checkName: function(value) {
        value = value.trim();
        var regex = /[a-zA-Z]+\s[a-zA-Z]+/;
        if (!regex.test(value)) {
          throw new Error('Name must be in format: "Firstname Lastname"');
        }
        return value;
      }
    }
  },
  region: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    unique: true,
    validate: {
      checkRegions: function(value) {
        // TODO currently regions are hardcoded, create a new table with region
        // and validate from this table instead
        var regions = ['North', 'East', 'South', 'West'];
        var values = (Array.isArray(value)) ? value : [value];
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

// TODO define a region model to add remove regions
// var Region = sequelize.define('region', {
//   name: Sequelize.STRING
// });

db.People = People;
// db.Region = Region;
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
