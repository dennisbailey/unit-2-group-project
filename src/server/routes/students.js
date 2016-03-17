var express = require('express');
var router = express.Router();
var queries = require('../queries/students_queries');


// *** Helper Functions *** //
// Return the user's name for use in Swig
function userName(user){

    var name = '';

    if(user) { name = user.first; }

    return name;
}

// Create an array of objects to pass to knex to insert feedback into the table student_feedback
function createInsert(arrayOfObjects){

    // This function will take an object (req.body) with the key value pairs of curriculum ID and rating
    // Find all the curriculum Ids with Object.keys() so we can loop through them
    var body = arrayOfObjects;
    var keys = Object.keys(body);

    // Declare an empty array that will hold all of the objects that knex will use to create new rows
    var insert =[];

    // Declare a variable today that captures today's date to be used for the feedback date
    var today = new Date().toJSON().slice(0,10);

    // Loop through the keys to create an object to pass to knex
    for(i=0; i < keys.length; i++){

        // If the curriculum ID in the keys has a correcponding rating create an object
        // If there is no rating, ignore that curriculum ID
        if(body[keys[i]] !== ''){

          var object= {};

          // Create the key value pairs that correspond to the columns in student_feedback and their values
          object.student_id = req.user.id;
          object.curriculum_id = keys[i];
          object.rating = body[keys[i]];
          object.feedbackDt =  today;

          // Push the object to the array insert before checking the next curriculum ID in keys
          insert.push(object);

        }
    }

    // Return an array of objects that contain all the information we want to insert into student_feedback
    return insert;

 }

// The home route for /students. This will show students all the assessments that have not yet been rated
router.get('/', function(req, res, next) {

    queries.allUnratedForOneStudent(req.user.id)

    .then(function(result){
        res.render('students', { title: 'students',
                                 data: result,
                                 name: userName(req.user) });
    })

    .catch(function(error) { return error; });

});


// This GET route shows a student all of the learning experiences and attaches a rating if present
// If there's no rating, the learning experience will offer them a link back to the assesments page
router.get('/all', function(req, res, next){

    queries.allAssessmentsForOneStudent(req.user.id)

    .then( function (result) {

        res.render('studentsAll', { title: 'Students',
                                    data: result , name: userName(req.user) });
    })

    .catch(function (error) { return error; });

});



// This POST route creates an array of objects to pass to knex and insert into student_feedback
router.post('/addrating', function(req, res, next){

    // Pass req.body to createInsert()
    var ratings = req.body;
    var insertbody = createInsert(ratings);

    // Pass the array of objects to knex
    queries.insertFeedback(insertbody)

    .then( function (result) {
        res.redirect('/students');
    })

    .catch(function (error) { return error; });

});


// This GET route returns all assessments a student has completed for a specific type of learning experience
router.get('/:typeid', function(req, res, next){

    queries.allAssessmentsByTypeForOneStudent(req.params.typeid)

    .then( function (result) {
        res.render('students-type', { title: 'students',
                                      data: result,
                                      name: userName(req.user) });
    })

    .catch(function (error) { return error; });

});

module.exports = router;
