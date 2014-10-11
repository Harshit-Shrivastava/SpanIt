var placesQuery = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=12.9354746,77.6944372&radius=500&key=AIzaSyCA2a9Okh-ptTUUz2asKCv4S7GeEQ3L6V4";

var fsQuery = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=12.9354746,77.6944372&radius=500&key=AIzaSyCA2a9Okh-ptTUUz2asKCv4S7GeEQ3L6V4";

var fsResult;

function fsCall(){
var cur_location = new google.maps.LatLng(12.9354746,77.6944372);
 var request = {
	        location: cur_location,
	        radius: 500,
	    };
	    
	 
	    // send request
	    service = new google.maps.places.PlacesService(map);
	    service.search(request, createResult);
}

function createResult(response, status){
	console.log(fsResult);
	fsResult = response;
}
/*
jQuery.noConflict();
jQuery(document).ready(function(){

  var url = 'https://maps.googleapis.com/maps/api/place/search/json';

  jQuery.ajax({
   url: url,
   dataType: 'jsonp',
   type: 'GET',
   data:  {
     location: '12.9354746,77.6944372',
     radius: 1000,
     name: 'coffee',
     key: 'AIzaSyCA2a9Okh-ptTUUz2asKCv4S7GeEQ3L6V4', // add your key here
     sensor: 'false'
     },
   // on success
   success: function(data, textStatus, jqXHR){
      console.log(data);
		fsResult = data;
   },
   // on failure
   error: function (jqXHR, textStatus, errorThrown){
    console.log(jqXHR);
    console.log(textStatus);
    console.log(errorThrown);
   }
   });
 });

*/