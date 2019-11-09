function validate(e) {

  e.preventDefault();
  
  document.getElementById('Validation').style.display = "block";
  document.getElementById('bookingHeaderValidation').style.display = "block";
  document.getElementById('bookingTextValidation').style.display = "block";

  document.getElementById('BookingHeader').style.display = "none";
  document.getElementById('form').style.display = "none";
  document.getElementById('Booking').style.display = "none";


}

var form = document.getElementById('form');
form.addEventListener('submit', validate)
