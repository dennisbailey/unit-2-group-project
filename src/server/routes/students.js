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

function createInsert(object){

   var body = object;
   var insert =[];
   var keys = Object.keys(body);
   var today = new Date().toJSON().slice(0,10);
   
   for(i=0; i < keys.length; i++){
      if(body[keys[i]] !== ''){
        var object= {};
        object.student_id = req.user.id;
        object.curriculum_id = keys[i];
        object.rating = body[keys[i]];
        object.feedbackDt =  today;

        insert.push(object);
      }
     }
   return insert;
 
 }


router.get('/', function(req, res, next) {

   queries.allUnratedForOneStudent(req.user.id)
    .then(function(result){
      console.log(result)
        res.render('students', { title: 'students', data: result, name: userName(req.user)});
      })
    
    .catch(function(error){
      return error;
    });

});




router.get('/all', function(req, res, next){
    
    queries.allAssessmentsForOneStudent(req.user.id)
    
    .then( function (result) { 
     
        res.render('studentsAll', { title: 'Students',
                                    data: result , name: userName(req.user)});
    })
    
    .catch( function ( error ){
     
      return error; });
  
});




router.post('/addrating', function(req, res, next){
       
   var ratedRatings = req.body;
   var insertbody = createInsert(ratedRatings);

   queries.insertFeedback(insertbody)

   .then( function (result) { 
        res.redirect('/students');
    })
    
    .catch( function ( error )
     {
      return error; });

});


router.get('/all/:id', function(req, res, next){
    
    queries.allAssessmentsForOneStudent(req.user.id)
    
    .then( function (result) { 
        res.render('studentsAll', { title: 'Students',
                                    data: result , name: userName(req.user)});
    })
    
    .catch( function ( error )
     {console.log(error); 
      return error; });
  
});




router.get('/:typeid', function(req, res, next){

    queries.allAssessmentsByTypeForOneStudent(req.params.id)
    
    .then( function (result) { 
        res.render('students-type', { title: 'students',
                                    data: result, name: userName(req.user) });
    })
    
    .catch( function ( error ) { return error; });
  
});

module.exports = router;
