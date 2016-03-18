var express = require('express');
var router = express.Router();
var queries = require('../queries/admin_queries');
var passport = require('../lib/auth');
var helpers = require('../lib/helpers');


// *** Routes *** //
// Show the Admin dashboard
router.get('/', function(req, res, next){

  res.render('admin', { title: 'Admin',
                        status: req.session.length });

});


// Show the entire curriculum
router.get('/curriculum', function(req, res, next){

    queries.allAssignments()

    .then(function(result) {
        res.render('curriculum', { title: 'Admin',
                                   status: req.session.length,
                                   data: result });
    })

    .catch( function (error) { return error; });

});


// Prepopulate the add to curriculum page with values from the database
router.get('/curriculum/add', function(req, res, next) {

    var promises = [];

    promises.push(queries.allFromTable('instructors'));

    promises.push(queries.allFromTable('types'));

    promises.push(queries.allFromTable('topics'));

    return Promise.all(promises)

    .then( function (result) {

        res.render('curriculum-add', { title: 'Add To Curriculum',
                                       instructors: result[0],
                                       types: result[1],
                                       topics: result[2] });

    })

    .catch( function ( result ) { return result; });

});


// POST route to add a Learning Experience to the curriculum
router.post('/curriculum/add', function(req, res, next) {

    queries.addTo('curricula', req.body)

    .then(function (result) {
        res.render('curriculum-add', { title: 'Add To Curriculum',
                                       message: 'New Learning Experience Added to the Curriculum' });

    })

    .catch( function ( result ) { return result; });

});


// Delete a Learning Experience
router.get('/curriculum/delete/:id', function(req, res, next) {

    queries.deleteFrom('curricula', req.params.id)

    .then(function (result) {
        res.redirect('/admin/curriculum');
    })

    .catch( function ( result ) { return result; });


});


// Show the edit page for a Learning Experience
router.get('/curriculum/edit/:id', function(req, res, next) {

    var promises = [];

    promises.push(queries.allFromTable('instructors'));

    promises.push(queries.allFromTable('types'));

    promises.push(queries.allFromTable('topics'));

    promises.push(queries.showOneAssignment(req.params.id));

    return Promise.all(promises)

    .then( function (result) {
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

    queries.makeEdit('curricula', req.params.id, req.body)

    .then(function (result) {

        res.redirect('/admin/curriculum');
    })

    .catch( function ( result ) { return result; });

});


// Show all the instructors
router.get('/instructor', function(req, res, next){

    queries.allFromTable('instructors')

    .then(function(result) {
        res.render('instructor', { title: 'Admin',
                                   status: req.session.length,
                                   data: result });
    })

    .catch( function (error) { return error; });

});


// Show the page to add additional instructors
router.get('/instructor/add', function(req, res, next) {
    res.render('instructor-add');
});


// POST route to add instructors to the database
router.post('/instructor/add', function(req, res, next) {

    queries.addTo('instructors', req.body)

    .then(function (result) {
        res.render('instructor-add', { title: 'Add new instructor',
                                       message: 'New Instructor Added' });

    })

    .catch( function ( result ) { return result; });

});


// Route to delete an instructor from the database
router.get('/instructor/delete/:id', function(req, res, next) {

    queries.deleteFrom('instructors', req.params.id)

    .then(function (result) {
        res.redirect('/admin/instructor');
    })

    .catch( function ( result ) { return result; });


});


// Prepopulate the edit page for an instrutctor with known values
router.get('/instructor/edit/:id', function(req, res, next) {

    queries.showOneInstructor(req.params.id)

    .then( function (result) {
        res.render('instructor-edit', { title: 'Edit This Instructor',
                                        instructor: result[0] });
    })

    .catch( function ( result ) { return result; });

});


// Send instructor updates to the databse
router.post('/instructor/edit/:id', function(req, res, next) {

    queries.makeEdit('instructors', req.params.id, req.body)

    .then(function (result) {

        res.redirect('/admin/instructor');
    })

    .catch( function ( result ) { return result; });

});


// Show all the users along with their authorization level
router.get('/users', function(req, res, next){

    queries.allUsers()

    .then(function(result) {
        res.render('users', { title: 'Admin',
                              status: req.session.length,
                              data: result });
    })

    .catch( function (error) { return error; });

});


// Route to revoke a user's admin status
router.get('/users/:id/revoke', function(req, res, next) {

    queries.removeAdmin(req.params.id)

    .then(function (result) {
        res.redirect('/admin/users');
    })

    .catch( function ( result ) { return result; });


});


// Route to grant a user admin status
router.get('/users/:id/grant', function(req, res, next) {

    queries.makeAdmin(req.params.id)

    .then(function (result) {
        res.redirect('/admin/users');
    })

    .catch( function ( result ) { return result; });

});


module.exports = router;
