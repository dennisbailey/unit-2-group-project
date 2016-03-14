var express = require('express');
var router = express.Router();
var index_queries = require('../queries/index_queries');


router.get('/', function(req, res, next) {
  index_queries.allAssignments()
  .then(function(result){
    console.log(result[3]);
    res.render('index', { title: 'Home', data: result });
  });

  
});

module.exports = router;
