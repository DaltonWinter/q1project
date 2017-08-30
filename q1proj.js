var DIRECTIONSDISPLAY;
var DIRECTIONSSERVICE;
function initMap() {
   DIRECTIONSDISPLAY = new google.maps.DirectionsRenderer;
   DIRECTIONSSERVICE = new google.maps.DirectionsService;
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: {
      lat: 39.73,
      lng: -104.99
    }


  });
  DIRECTIONSDISPLAY.setMap(map);
  DIRECTIONSDISPLAY.setPanel(document.getElementById('right-panel'));

  var control = document.getElementById('floating-panel');
  control.style.display = 'block';
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);

}
$(document).ready(function() {
  $('select').material_select();



});
// directionsDisplay.setMap(map);
// directionsDisplay.setPanel(document.getElementById('right-panel'));
//
// var control = document.getElementById('floating-panel');
// control.style.display = 'block';
// map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);

var onChangeHandler = function() {
  console.log("change handler")
  calculateAndDisplayRoute();
};
$('#start').change(onChangeHandler);
$('#end').change(onChangeHandler);

function calculateAndDisplayRoute() {
  var start = document.getElementById('start').value;

  var end = document.getElementById('end').value;
  DIRECTIONSSERVICE.route({
    origin: start,
    destination: end,
    travelMode: 'DRIVING'
  }, function(response, status) {
    if (status === 'OK') {
      DIRECTIONSDISPLAY.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}
