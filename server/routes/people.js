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

// TODO create route to update regions on person record
router.put('/:id', function(req, res) {

});

router.delete('/:id', function(req, res) {
  db.People.destroy({
    where: {
      id: Number(req.params.id)
    }
  })
  .then(function(msg) {
    res.json(msg);
  })
  .catch(function(err) {
    res.json(err);
  });
});
