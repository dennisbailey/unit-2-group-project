// *** main dependencies *** //
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var swig = require('swig');
var cookieSession = require('cookie-session');
var passport = require('./lib/auth.js');
var helpers = require('./lib/helpers.js');


// *** routes *** //
var routes = require('./routes/index.js');
var instructors = require('./routes/instructors.js');
var students = require('./routes/students.js');
var admin = require('./routes/admin.js');

// *** express instance *** //
var app = express();


// *** view engine *** //
var swig = new swig.Swig();
app.engine('html', swig.renderFile);
app.set('view engine', 'html');


// *** static directory *** //
app.set('views', path.join(__dirname, 'views'));


// *** config middleware *** //
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cookieSession({
  name: 'local',
  keys: ['aaa', 'sss']
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, '../client')));



// *** main routes *** //
app.use('/', routes);

//Routes protected by a login
app.use(function(req, res, next) {

  if (req.user) {
    next();
  } else {
    res.redirect('/login');
  }

});

app.use('/students', students);

//Routes protected by an admin login
app.use(function(req, res, next) {

  if(!req.user.admin) {
      return res.redirect('/login');
  } else {
      next();
  }

});

app.use('/instructors', instructors);
app.use('/admin', admin);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// *** error handlers *** //

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
