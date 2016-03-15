var express = require('express');
var router = express.Router();
var queries = require('../queries/students_queries');

router.get('/', function(req, res, next) {
   queries.allUnratedForOneStudent(1)
    .then(function(result){
      console.log(result);
        res.render('students', { title: 'students', data: result});
      })
    
    .catch(function(error){
      return error;
    });

});




router.get('/all', function(req, res, next){
    
    queries.allAssessmentsForOneStudent(2)
    
    .then( function (result) { 
        res.render('studentsAll', { title: 'Students',
                                    data: result });
    })
    
    .catch( function ( error )
     {console.log(error); 
      return error; });
  
});

// router.get('/:id', function(req, res, next){

//     queries.allTypeAssessments(req.params.id)
    
//     .then( function (result) { 
//         res.render('instructors-type', { title: 'Instructors',
//                                     data: result });
//     })
    
//     .catch( function ( error ) { return error; });
  
// });

module.exports = router;
