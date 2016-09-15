var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CRP - Código de Roteamento Postal' });
});

module.exports = router;
