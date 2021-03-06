var express = require('express');
var router = express.Router();
var index_queries = require('../queries/index_queries');
var passport = require('../lib/auth');
var helpers = require('../lib/helpers');


// *** Helper Funtions *** //
function userName(user){

    var name = '';

    if(user) { name = user.first; }

    return name;
}

// *** Routes *** //
// Populate the homepage with all the assignments
router.get('/', function(req, res, next) {

    index_queries.allAssignments()

    .then(function(result) {
        res.render('index', { title: 'Home',
                              status: req.session.length,
                              data: result,
                              name: userName(req.user) });
    })

    .catch( function (error) { return error; });

});


// Registration
router.get('/registration', function(req, res, next) {

    res.render('registration', { title: 'register' });

});

// Submit Registration and check for a unique email
router.post('/registration', function(req, res, next) {

    var newUser = req.body;
    var hash = helpers.hashing(newUser.password);

    newUser.password = hash;

    index_queries.checkIfUserExists(newUser.email)

    .then(function(data) {
        if(data.length) {

            res.render('registration', {
              message: 'This email already exists'
            });

        } else {

            index_queries.addNewUser(newUser)

            .then(function() {
                res.redirect('/');
            })

            .catch( function (error) { return error; });
        }

    })

    .catch( function (error) { return error; });

});


// Login
router.get('/login', function(req, res, next) {

    res.render('login', { title: 'Login'} );

});


// Submit Login
router.post('/login', function(req, res, next) {

    passport.authenticate('local', function(err, user) {
        if (err) {
            res.render('login',
              {
                title: 'Unknown Login',
                message: 'This email and password combinaton is unknown to us.'
              }
            );

        } else {
            req.logIn(user, function(err) {
              if (err) {
                  return next(err);
              } else {
                  if (req.user.admin) {
                    return res.redirect('/instructors');
                  } else {
                    return res.redirect('/students');
                  }
              }
            });
        }
    })(req, res, next);

});

// Log out
router.get('/logout', function(req, res, next) {

    req.session = null;

    res.redirect('/');

});


// *** Index.html Sorts *** //
// Sort by title
router.get('/sortByTitle', function(req, res, next){

    index_queries.allAssignmentsSortbyTitle()

    .then(function(result) {
        res.render('index', { title: 'Home',
                              status: req.session.length,
                              data: result,
                              name: userName(req.user) });
    });

});


// Sort by Instructor
router.get('/sortByInstructor', function(req, res, next){

    index_queries.allAssignmentsSortByInstructor()

    .then(function(result) {
        res.render('index', { title: 'Home',
                              status: req.session.length,
                              data: result,
                              name: userName(req.user) });
    });

});


// Sort by Learning Experience type
router.get('/sortByType', function(req, res, next){

    index_queries.allAssignmentsSortByType()

    .then(function(result) {
        res.render('index', { title: 'Home',
                              status: req.session.length,
                              data: result,
                              name: userName(req.user) });
    });

});


// Sort by Learning Experience date
router.get('/sortByDate', function(req, res, next){

    index_queries.allAssignmentsSortByDate()

    .then(function(result) {
        res.render('index', { title: 'Home',
                              status: req.session.length,
                              data: result,
                              name: userName(req.user) });
    });

});


module.exports = router;
