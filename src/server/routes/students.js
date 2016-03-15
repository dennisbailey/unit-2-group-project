var express = require('express');
var router = express.Router();
var queries = require('../queries/students_queries');



//helper function section 
function userName(user){
  var name = '';
  if(user){
    name = user.first;
  }
  return name;
}




router.get('/', function(req, res, next) {
   queries.allUnratedForOneStudent(req.user.id)
    .then(function(result){
      console.log(result);
        res.render('students', { title: 'students', data: result, name: userName(req.user)});
      })
    
    .catch(function(error){
      return error;
    });

});




router.get('/all', function(req, res, next){
    console.log(req.user.id);
    queries.allAssessmentsForOneStudent(req.user.id)
    
    .then( function (result) { 
        res.render('studentsAll', { title: 'Students',
                                    data: result , name: userName(req.user)});
    })
    
    .catch( function ( error )
     {console.log(error); 
      return error; });
  
});




router.post('/all', function(req, res, next){
    
    queries.allAssessmentsForOneStudent(req.user.id)
    
    .then( function (result) { 
        res.render('studentsAll', { title: 'Students',
                                    data: result , name: userName(req.user)});
    })
    
    .catch( function ( error )
     {console.log(error); 
      return error; });
  
});




router.get('/:id', function(req, res, next){

    queries.allAssessmentsByTypeForOneStudent(req.params.id)
    
    .then( function (result) { 
        res.render('students-type', { title: 'students',
                                    data: result, name: userName(req.user) });
    })
    
    .catch( function ( error ) { return error; });
  
});

module.exports = router;
