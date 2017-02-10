var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('index', {
    title: 'Home'
  });
});

router.get('/error', function(req, res){
  res.render('error', {
    title: 'Error'
  });
});

module.exports = router;
