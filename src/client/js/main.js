// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
  
  if ($(".datepicker").length > 0) {
  
      // Function to generate today's date
      Date.prototype.toDateInputValue = (function() {
          var local = new Date(this);
          local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
          return local.toJSON().slice(0,10);
      });
      
      // Insert today's date as the default value for the review page date picker
      document.getElementById('datepicker0').value = new Date().toDateInputValue();
      document.getElementById('datepicker1').value = new Date().toDateInputValue();
  
  }});

var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;