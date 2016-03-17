var express = require('express');
var router = express.Router();
var queries = require('../queries/admin_queries');
var passport = require('../lib/auth');
var helpers = require('../lib/helpers');


// *** Routes *** //
// Show the entire curriculum
router.get('/curriculum', function(req, res, next){

    queries.allAssignments()
  
    .then(function(result) {
        res.render('curriculum', { title: 'Admin', 
                              status: req.session.length, 
                              data: result });
    })
    
    .catch( function (error) { 
      console.log(error)
      return error; });

});


// Prepopulate the add to curriculum page with values from the database
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
    
    .catch( function ( result ) { return result; })
    
});


// Add a Learning Experience to the curriculum
router.post('/curriculum/add', function(req, res, next) {
    
    queries.addLearningExperience(req.body)
    
    .then(function (result) {  
        res.render('curriculum-add', { title: 'Add To Curriculum',
                                       message: 'New Learning Experience Added to the Curriculum' });
      
    })
    
    .catch( function ( result ) { return result; });
    
});
    


// Delete a Learning Experience
router.get('/curriculum/delete/:id', function(req, res, next) {
    
    queries.deleteOneAssignments(req.params.id)
    
    .then(function (result) {  
        res.redirect('/admin/curriculum');
    })
    
    .catch( function ( result ) { return result; });
    
});


// Show the edit page for a Learning Experience
router.get('/curriculum/edit/:id', function(req, res, next) {
    
    var promises = [];
    
    promises.push(queries.allInstructors());
    
    promises.push(queries.allTypes());
    
    promises.push(queries.allTopics());
    
    promises.push(queries.showOneAssignment(req.params.id));
    
    return Promise.all(promises)
    
    .then( function (result) {  
        console.log(result);
        res.render('curriculum-edit', { title: 'Edit This Learning Experience',
                                       instructors: result[0],
                                       types: result[1],
                                       topics: result[2],
                                       values: result[3][0] });
      
    })
    
    .catch( function ( result ) { return result; });
    
});


// Submit edits a Learning Experience
router.post('/curriculum/edit/:id', function(req, res, next) {
    
    queries.editOneAssignment(req.params.id)
    
    .then(function (result) {  
        res.redirect('/admin/curriculum');
    })
    
    .catch( function ( result ) { return result; });
    
});
    


module.exports = router;
