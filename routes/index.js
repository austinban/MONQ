var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('index', {
    title: 'Home'
  });
});

router.get('/about', function(req, res){
  res.render('about', {
    title: 'About'
  });
});

router.get('/contact', function(req, res){
  res.render('contact', {
    title: 'Contact'
  });
});

router.get('/work', function(req, res){
  res.render('work', {
    title: 'Work'
  });
});

router.get('/classnav', function(req, res){
  res.render('classnav', {
    title: 'ClassNav App Case'
  });
});

router.get('/venture360', function(req, res){
  res.render('venture360', {
    title: 'Venture360 Case'
  });
});

router.get('/veripharm', function(req, res){
  res.render('veripharm', {
    title: 'Veripharm Case'
  });
});

router.get('/error', function(req, res){
  res.render('error', {
    title: 'Error'
  });
});

module.exports = router;
