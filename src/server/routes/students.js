var express = require('express');
var router = express.Router();
var queries = require('../queries/students_queries');

router.get('/', function(req, res, next) {
        res.render('students', { title: 'students' });

});


// router.get('/all', function(req, res, next){
    
//     queries.allAssessments()
    
//     .then( function (result) { 
//         res.render('instructors-all', { title: 'Instructors',
//                                     data: result });
//     })
    
//     .catch( function ( error ) { return error; });
  
// });

// router.get('/:id', function(req, res, next){

//     queries.allTypeAssessments(req.params.id)
    
//     .then( function (result) { 
//         res.render('instructors-type', { title: 'Instructors',
//                                     data: result });
//     })
    
//     .catch( function ( error ) { return error; });
  
// });

module.exports = router;
