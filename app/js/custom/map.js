$(document).ready(function() {


/* Snazzy Maps style https://snazzymaps.com/
======================================== */
 google.maps.event.addDomListener(window, 'load', init);
        
    function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 17,
            mapTypeControl: false,
            fullscreenControl: false,
            // panControl: false,
            // signInControl: false,
            streetViewControl: false,
            zoomControl: false,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(49.82573325273823, 24.040537476539612), 
            // How you would like to style the map. 
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{"featureType":"administrative.country","elementType":"geometry","stylers":[{"visibility":"simplified"},{"hue":"#ff0000"}]}]
        };

        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.querySelector(".js-map__content");

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

       

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(49.82573325273823, 24.040537476539612),
            map: map,
            title: 'ул. Тарнавского 112',
            icon: 'image/svg/map_marker.svg',
            animation: google.maps.Animation.DROP
        });


        
        // Marker on center
		var markerCenter = map.getCenter();

		google.maps.event.addDomListener(window, 'resize', function() {
			map.setCenter(markerCenter);
		});


		// Content to display in the InfoWindow
		var infoWindow = new google.maps.InfoWindow({
			content: "<p>ул. Тарнавского 112</p>",
		});

        marker.addListener('click', function() {
          infoWindow.open(map, marker);
        });

    }



	
});