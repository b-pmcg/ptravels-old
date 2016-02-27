L.mapbox.accessToken = 'pk.eyJ1IjoiZHVpa2VyIiwiYSI6ImRuVUVodEkifQ.D0uKTWSjlEljzeQYzHwzcg';

var map = L.mapbox.map('map', 'duiker.i49abp4o', {
	detectRetina: true,
	zoomControl: true,
	maxZoom: 15,
	minZoom: 3,
	maxBounds: [
		[-57.6, -175.0],
		[71.0, 179.5]
	]
});

map.setView([40.55, -97.60], 5);
map.addControl(L.mapbox.geocoderControl('duiker.i49abp4o'));

//username input form
var textControl = L.control();
textControl.onAdd = function(map) {
	var div = L.DomUtil.create('div', 'leaflet-control');
	//TODO: set user 'johnnyd' as default value for non-phish.net users
	div.innerHTML += '<input class="data" type="textbox" input id="username" name="username" placeholder="Phish.net Username"/><button id="advancedSearch" name="submit" type="submit" class="btn btn-default">Search</button>';
	return div;
};
map.addControl(textControl);

//set user location
map.locate({
	setView: true,
	maxZoom: 5
});

//indicate location success
function onLocationFound(e) {
	var radius = e.accuracy / 2;
	L.marker(e.latlng).addTo(map).bindPopup("Your Location").openPopup();
	L.circle(e.latlng, radius).addTo(map);
}
map.on('locationfound', onLocationFound);

//indicate location failure
function onLocationError(e) {
	alert(e.message);
}

map.on('locationerror', onLocationError);


//search for user click submit
$('#advancedSearch').click(function(event, cities) {
	markersLayer.clearLayers();
	var formData = $('#username').serialize();
	username = formData.split('=');
	if (typeof(cities) === 'undefined') {
		getAllUserShows(username[1]);
	}
});

//search for user on carriage return
$('#username').keypress(function(event, cities) {
	if (event.which == 13) {
		markersLayer.clearLayers();
		var formData = $('#username').serialize();
		username = formData.split('=');
		if (typeof(cities) === 'undefined') {
			getAllUserShows(username[1]);
		}
	};
});
//TODO: ajax call doesn't stop if you search for a new person. Search should stop ajax.


var markersLayer = new L.LayerGroup();

//TODO:markers cluster group not working due to pnet loops probably
//var markersLayer = new L.markerClusterGroup();

function addMarkers(markers) {
	for (var i = 0; i < markers.length; i++) {
		var lat = markers[0];
		var lon = markers[1];
		var popupText = "<H1>" + markers[2] + ", " + markers[3] + ", " + markers[4] + ", " + markers[5] + "</h1>";
		var marker = L.marker([lat, lon]).bindPopup(popupText);
		markersLayer.addLayer(marker);
	};
};

markersLayer.addTo(map);
