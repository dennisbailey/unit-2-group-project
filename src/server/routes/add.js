var express = require('express');
var router = express.Router();
var index_queries = require('../queries/index_queries');
var passport = require('../lib/auth');
var helpers = require('../lib/helpers');


// *** Routes *** //
// Show the add to curriculum route
router.get('/curriculum', function(req, res, next) {
  
    res.render('add-curriculum', { title: 'Add To Curriculum' });

});


module.exports = router;
