// Get the modal
var modal = document.getElementById("profile_page");

// Get the button that opens the modal
var btn = document.getElementById("butterfly");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// Get the modal
var alert = document.getElementById("alert_modal");

// Get the button that opens the modal
var alert_btn = document.getElementById("alert_button");

// When the user clicks on the button, open the modal
alert_btn.onclick = function() {
  modal.style.display = "block";
}