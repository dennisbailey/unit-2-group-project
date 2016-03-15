var express = require('express');
var router = express.Router();
var index_queries = require('../queries/index_queries');
var passport = require('../lib/auth');
var helpers = require('../lib/helpers');



router.get('/', function(req, res, next) {
  index_queries.allAssignments()
  .then(function(result){
    console.log(result);
    res.render('index', { title: 'Home', status: req.session.length, data: result });
  });


// Registration
router.get('/registration', function(req, res, next) {
  
    res.render('registration', 
        { title: 'register'}
    );
    
});



// Login
router.get('/login', function(req, res, next) {
  
    res.render('login', 
        { title: 'Login'}
    );
    
});





// Submit Login
router.post('/login', function(req, res, next) {

    passport.authenticate('local', function(err, user) {
        if (err) {
            res.render('login', 
              {
                title: 'Unknown Login', 
                error: 'This email and password combinaton is unknown to us.'
              }
            );

        } else {
            req.logIn(user, function(err) {
              if (err) {
                  return next(err);
              } else {
                  return res.redirect('/');
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


  
});

module.exports = router;
