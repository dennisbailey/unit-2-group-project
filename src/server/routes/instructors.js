var express = require('express');
var router = express.Router();
var queries = require('../queries/instructor_queries');

// *** Helper Functions *** //
// If a user name exists, assign it to var name so it can be passed to swig
function userName(user){
  var name = '';
  if(user){
    name = user.first;
  }
  return name;
}

// *** Routes *** //
// Populate /instructors with the average assessment score for each type
router.get('/', function(req, res, next) {
    
    queries.avgAssessments()
    
    .then( function (result) {
        res.render('instructors', { title: 'Instructors',
                                    data: result, 
                                    name: userName(req.user) }
        );
    })
    
    .catch( function ( error ) { return error; });
  
});


router.get('/all', function(req, res, next){
    
    queries.allAssessments()
    
    .then( function (result) {
        res.render('instructors-all', { title: 'Instructors',
                                    data: result , name: userName(req.user) });
    })
    
    .catch( function ( error ) { return error; });
  
});

router.get('/:id', function(req, res, next){

    queries.allTypeAssessments(req.params.id)
    
    .then( function (result) { 
      console.log(result);
        res.render('instructors-type', { title: 'Instructors',
                                    data: result, name: userName(req.user) });
    })
    
    .catch( function ( error ) { console.log(error);return error; });
  
});

module.exports = router;
