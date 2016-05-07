
var googleMap = {};
var lat = [];
var long = [];
var x = [47.524742126];
var map;

googleMap.initMap = function() {
  geocoder = new google.maps.Geocoder();
  // var myLatLng = { lat: 49.621707, lng: -122.326221 };
  map = new google.maps.Map(document.getElementById('map'),
    {
      center: { lat: 47.621707, lng: -122.326221 },
      zoom: 10
    });
  request.send();
};




var request = new XMLHttpRequest();

request.open('GET', 'https://data.seattle.gov/api/views/xv6f-9u5j/rows.json?accessType=DOWNLOAD', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    var resp = request.responseText;
    var parse = JSON.parse(resp);
    for (var i = 0; i < parse.data.length; i++ ) {
      long.push(parse.data[i][22]);
      lat.push(parse.data[i][23]);
    }

    console.log(parse.data.length);
    console.log('long ' + long[0], 'lat ' + lat[0]);

    function setMarkers(map) {
      for (var p = 0; p < lat.length; p++) {
        var crimes = [
      [ JSON.parse(lat[p]), JSON.parse(long[p])]
        ];

        var marker = new google.maps.Marker({
          position: { lat: JSON.parse(lat[p]), lng: JSON.parse(long[p]) },
          map: map,
          zIndex: 4
        });
        // console.log(crimes);
      }
    }
  }
  setMarkers(map);
};

request.onerror = function() {
  console.log('errors');
};
