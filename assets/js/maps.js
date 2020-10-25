function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: {
            lat: 45.478489,
            lng: 9.122150 
        }
    });

    var labels = "";

    var locations = [
        { lat: 45.478489, lng: 9.122150 },
        
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}