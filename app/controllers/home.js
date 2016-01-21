var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Project = mongoose.model('Project');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
    res.render('index', {
      title: 'What\'s NX?'
    });
});

router.get('/about', function (req, res, next) {
    res.render('about', {
      title: 'About What\'s NX?'
    });
});
