var express = require('express');
var router = express.Router();
var index_queries = require('../queries/index_queries');


router.get('/', function(req, res, next) {
    
    res.render('instructors', { title: 'Instructors' });


  
});

module.exports = router;
