var bcrypt = require('bcrypt');

// Check for an authenticated user
// if not -> redirect to login
// if so -> call next()
function ensureAuthenticated(req, res, next) {
  
  if(!req.user) {
      return res.redirect('/login');
  } else {
      next();
  }
    
}

function ensureAdmin(req, res, next) {
  if(!req.user.admin) {
      return res.redirect('/login');
  } else {
      next();
  }
    
}

// Check if user is authenticated
// If not -> call next()
// If so -> redirect to main route
function loginRedirect(req, res, next) {
  
  if(req.user) {
      return res.redirect('/');
  } else {
      next();
  }
  
}

function hashing(password) {
    return bcrypt.hashSync(password, 10);
}

function comparePassword(password, hashedpassword) {
    return bcrypt.compareSync(password, hashedpassword);
}


module.exports = {
  ensureAuthenticated: ensureAuthenticated,
  loginRedirect: loginRedirect,
  hashing: hashing,
  comparePassword: comparePassword
}