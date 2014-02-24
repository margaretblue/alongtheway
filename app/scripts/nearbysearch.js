var nearbyBtn = document.getElementById('nearby');

var options = {
  location: {},
  radius: '500',
  types: ['store']
};

function nearbySearch (clientLoc, options) {
  service = new google.maps.places.PlacesService(map);
  var client = new google.maps.LatLng(clientLoc.d,clientLoc.e);
  options.location = client;
  service.nearbySearch(options, function (results, status) {
    nearbyHandler(results);
  });
}

nearbyBtn.addEventListener('click', function (e) {
  nearbySearch(clientLoc, options);
}, false);

function nearbyHandler (data) {
  console.log(data);
  var names = _(data).pluck('name').map(function (val) {
    return val;
  });
  for (var name in names) {
    console.log(names[name]);
  }
}