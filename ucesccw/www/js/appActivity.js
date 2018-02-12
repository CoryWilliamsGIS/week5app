
    // load the map

    var mymap = L.map('mapid').setView([51.505, -0.09], 13);

    // load the tiles

    L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw", {

      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',

      maxZoom: 18,

      id: 'mapbox.streets'

    }).addTo(mymap);
	
	    // add a point

    L.marker([51.5, -0.09]).addTo(mymap)

      .bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();

    // add a circle

    L.circle([51.508, -0.11], 500, {

      color: 'red',

      fillColor: '#f03',

      fillOpacity: 0.5

    }).addTo(mymap).bindPopup("I am a circle.");

    // add a polygon with 3 end points (i.e. a triangle)

    var myPolygon = L.polygon([

      [51.509, -0.08],

      [51.503, -0.06],

      [51.51, -0.047]

    ], {

      color: 'red',

      fillColor: '#f03',

      fillOpacity: 0.5

    }).addTo(mymap).bindPopup("I am a polygon.");
	
		// create a custom popup
	
	var popup = L.popup();
	
	// create an event detector to wait for the user's click event and then use the popup to show them where they clicked

	// note that you don't need to do any complicated maths to convert screen coordinates to real world coordinates - the Leaflet API does this for you

	function onMapClick(e) { 
popup
.setLatLng(e.latlng)
.setContent("You clicked the map at " + e.latlng.toString())
.openOn(mymap);
}
	// now add the click event detector to the map
mymap.on('click', onMapClick);
