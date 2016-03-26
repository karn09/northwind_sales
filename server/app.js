var express = require('express');
var morgan = require('morgan');
var path = require('path');
var bodyparser = require('body-parser');
var app = express();

var rootDir = path.join(__dirname, '../');

module.exports = app;

app.use(bodyparser.json());
app.use('/api', require('./routes'));
app.use('/vendor', express.static(path.join(rootDir, 'bower_components')));
app.use('/public', express.static(path.join(rootDir, 'browser')));
app.use(morgan('dev'));
// define middleware handler

app.use(function(req, res, next) {
  if (path.extname(req.path).length > 0) {
    res.status(404).end();
  } else {
    next();
  }
});

app.get('/', function(req, res) {
  res.sendFile(rootDir + '/browser/index.html');
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500).send(err.message || 'Internal server error');
});
