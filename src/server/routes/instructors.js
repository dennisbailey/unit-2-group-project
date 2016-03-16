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
    
    var promises = [];
    
    promises.push(queries.avgAssessments())
    
    promises.push(queries.allStudents())
    
    return Promise.all(promises)
    
    .then( function (result) {
        res.render('instructors', { title: 'Instructors',
                                    data: result[0],
                                    students: result[1], 
                                    name: userName(req.user) }
        );
    })
    
    .catch( function ( error ) { return error; });
  
});


router.get('/all', function(req, res, next){
    
    queries.allAssessments()
    
    .then( function (result) {
        res.render('instructors-all', { title: 'Instructors',
                                        data: result, 
                                        name: userName(req.user) });
    })
    
    .catch( function ( error ) { return error; });
  
});

router.get('/:type', function(req, res, next){

    queries.avgTypeAssessments(req.params.type)
    
    .then( function (result) { 
        res.render('instructors-type', { title: 'Instructors',
                                         data: result, 
                                         name: userName(req.user) });
    })
    
    .catch( function ( error ) { return error; });
  
});

router.get('/student/:id', function(req, res, next){
    
    var promises = [];
    
    promises.push(queries.avgAssessmentsForOneStudent(req.params.id));
    
    promises.push(queries.oneStudent(req.params.id));
    
    return Promise.all(promises)
    
    .then( function (result) {
        res.render('instructors-student', { title: 'Instructors',
                                             summary: result[0],
                                             data: result[1], 
                                             name: userName(req.user) });
    })
    
    .catch( function ( error ) { return error; });
  
});

// Drill down inside a learning experience type to a specific learning experience's feedback
router.get('/:type/:id', function(req, res, next){
  
    queries.allTypeAssessments(req.params.type, req.params.id)
    
    .then( function (result) { 
        res.render('instructors-type-all', { title: 'Instructors',
                                             data: result, 
                                             name: userName(req.user) });
    })
    
    .catch( function ( error ) { return error; });
  
});

module.exports = router;
