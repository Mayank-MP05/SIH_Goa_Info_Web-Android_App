
// Where you want to render the map.
var element = document.getElementById("osm-map");


// Create Leaflet map on map element.
var map = L.map(element);

// Add OSM tile leayer to the Leaflet map.
L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; PCCOE Team Infinity Seekers'
}).addTo(map);

// Target's GPS coordinates.
var target = L.latLng("15.2993", "74.1240");

// Set map's center to target with zoom 14.
map.setView(target, 9);

// Place a marker on the same location.
L.marker(target).addTo(map);
