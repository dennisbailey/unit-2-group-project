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
      
      // Find a date three dates after today's date
      var someDate = new Date();
      var numberOfDaysToAdd = 3;
      var futureDate = someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
      
      var dd = someDate.getDate();
      var y = someDate.getFullYear();
      var m = someDate.getMonth() + 1;
      var mm;
      
      if ( m < 10 ) { mm = '0' + m; } else{ mm = m; }

      var futureDate = y + '-'+ mm + '-'+ dd;
      document.getElementById('datepicker1').value = futureDate;  
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