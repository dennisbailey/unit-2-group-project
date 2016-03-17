var express = require('express');
var router = express.Router();
var queries = require('../queries/admin_queries');
var passport = require('../lib/auth');
var helpers = require('../lib/helpers');


// *** Routes *** //

router.get('/curriculum', function(req, res, next){

    queries.allAssignments()
  
    .then(function(result) {
        res.render('curriculum', { title: 'Admin', 
                              status: req.session.length, 
                              data: result });
    })
    
    .catch( function (error) { 
      console.log(error
        )
      return error; });

});







// Show the add to curriculum route
router.get('/curriculum/add', function(req, res, next) {
    
    var promises = [];
    
    promises.push(queries.allInstructors());
    
    promises.push(queries.allTypes());
    
    promises.push(queries.allTopics());
    
    return Promise.all(promises)
    
    .then( function (result) {  

        res.render('curriculum-add', { title: 'Add To Curriculum',
                                       instructors: result[0],
                                       types: result[1],
                                       topics: result[2] });
      
    })
    
    .catch( function ( result ) { console.log(result); return result; })
    
});

// POST to add to the curriculum Registration and check for a unique email
router.post('/curriculum/add', function(req, res, next) {
    
    queries.addLearningExperience(req.body)
    
    .then(function (result) {  
        res.render('curriculum-add', { title: 'Add To Curriculum',
                                       message: 'New Learning Experience Added to the Curriculum' });
      
    })
    
    .catch( function ( result ) { return result; })
    
});
    
  









module.exports = router;
