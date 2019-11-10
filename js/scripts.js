//Js Prue

// Update the count down every 1 second
var x = setInterval(function () {
    'use strict';
    // Get todays date and time
    var now = new Date();
    var ampm = "am";
    var hour= now.getHours();
    if (hour > 12) {
        hour -= 12;
        ampm = "pm";
    }

    var html = '<div class="hours-wrapper"><span class="hours">' + hour + '</span> :</div><div class="minutes-wrapper"><span class="minutes">' + now.getMinutes() + '</span> :</div><div class="seconds-wrapper"><span class="seconds">' + now.getSeconds() + '</span> :</div><div class="seconds-wrapper"><span class="seconds">' + ampm.toUpperCase() + '</span> <br></div>';

    // Output the result in an element with id="commingsoon"
    document.getElementById("commingsoon").innerHTML = html;

}, 0);

