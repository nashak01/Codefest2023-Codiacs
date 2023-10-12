

function increaseText(){
    document.getElementsByClassName("container").style.fontSize = "large";
};

function resetText(){
    document.getElementsByClassName("container").style.fontSize = "regular";
};

function decreaseText() {
    document.getElementsByClassName("container").style.fontSize = "small";
};

function progress(timeleft, timetotal, $element) {
    var progressBarWidth = timeleft * $element.width() / timetotal;
    $element.find('div.bar').animate({ width: progressBarWidth }, timeleft == timetotal ? 0 : 1000, "linear");
    if(timeleft > 0) {
        setTimeout(function() {
            progress(timeleft - 1, timetotal, $element);
        }, 1000);
    }
var date = new Date(null);
date.setSeconds(timeleft);
var timeString = date.toISOString().substr(11, 8);
var newtimeleft = timeString;

  document.getElementById('timer').text(newtimeleft)
};

progress(30, 30, document.getElementById('progressBar'));



$( "#Memory_Jar" ).on( "click", function() {
  $(".content").hide();
  $("#Memory_Jar_Page").show();                               
} );