var express = require('express');
var router = express.Router();
var queries = require('../queries/add_queries');
var passport = require('../lib/auth');
var helpers = require('../lib/helpers');


// *** Routes *** //
// Show the add to curriculum route
router.get('/curriculum', function(req, res, next) {
    
    var promises = [];
    
    promises.push(queries.allInstructors());
    
    promises.push(queries.allTypes());
    
    promises.push(queries.allTopics());
    
    return Promise.all(promises)
    
    .then( function (result) {  

        res.render('add-curriculum', { title: 'Add To Curriculum',
                                       instructors: result[0],
                                       types: result[1],
                                       topics: result[2] });
      
    })
    
    .catch( function ( result ) { console.log(result); return result; })
    
});

// POST to add to the curriculum Registration and check for a unique email
router.post('/curriculum', function(req, res, next) {
    
    queries.addLearningExperience(req.body)
    
    .then(function (result) {  
        res.render('add-curriculum', { title: 'Add To Curriculum',
                                       message: 'New Learning Experience Added to the Curriculum' });
      
    })
    
    .catch( function ( result ) { return result; })
    
});
    
    




module.exports = router;
