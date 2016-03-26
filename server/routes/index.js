var router = require('express').Router();
module.exports = router;

router.use('/people', require('./people'));
router.use('/region', require('./region'));

router.use(function(req, res) {
  res.status(404).end();
});
