var router = require('express').Router();
var db = require('../db');
module.exports = router;

// retrieve, add, remove, and edit people and their associated regions
router.get('/', function(req, res) {
  console.log(db.People.findAll());
  db.People.findAll()
  .then(function(people) {
    res.json(people);
  })
  .catch(function(err) {
    res.json(err);
  });
});

router.post('/', function(req, res) {
  db.People.build(req.body)
    .save()
    .then(function(person) {
      res.json(person);
    })
    .catch(function(err) {
      res.json(err);
    });
});

router.put('/', function(req, res) {

});
