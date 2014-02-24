var nearbyBtn = document.getElementById('nearby');

var options = {
  location: '-33.8670522,151.1957362',
  radius: '500',
  sensor: 'true',
  types: 'food|drink'
};

/*
  Broken
*/

function nearbySearch (options) {
  var key = 'AIzaSyAcfDTA4hs7qfElS71wM0HLHY8H4B-Ok2o';
  var url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?';
  url += 'location=' + options.location;
  url += '&radius=' + options.radius;
  url += '&types=' + options.types;
  url += '&sensor=' + options.sensor;
  url += '&key=' + key;
  var req = new XMLHttpRequest();
  req.overrideMimeType('application/json');
  req.onreadystatechange = function (event) {
    var xhr = event.target;
    if (xhr.readyState == 4) {
      console.log('Request Completed');
      console.log(xhr.responseText);
    }
  };
  req.onloadend = function () {
    console.log(JSON.parse(req.responseText));
  };
  req.open('GET', url, true);
  req.send(null);
}

nearbyBtn.addEventListener('click', function (e) {
  nearbySearch(options);
}, false);