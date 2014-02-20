var request = require("request");

// Proxy through YQL.
var whereURL = 'http://query.yahooapis.com/v1/public/yql?format=json&q=select * from geo.placefinder where gflags="R" and text="{LAT},{LON}"';

var reverseGeo = function(lat, lon, callback) {
    var url = whereURL.replace("{LAT}", lat).replace("{LON}", lon);

    request(url, function(error, response, body) {
        var address;
        try {
            address = JSON.parse(body).query.results.Result;
            address = Array.isArray(address) ? address[0] : address;
            address = address.line1 + " " + address.line2;
        }
        catch(e) {
            callback("Could not retrieve the location at "+lat+", "+lon);
            return;
        }

        if (error || response.statusCode != 200) {
            callback("Error contacting the reverse geocoding service.");
        }
        else {
            callback(null, address);
        }
    });
};

module.exports = function(req, res) {
    var latitude = req.body.latitude;
    var longitude = req.body.longitude;

    reverseGeo(latitude, longitude, function(err, address) {

        console.log(latitude, longitude, err, address);

        res.render('index', {
            error: err,
            location: {
                latitude: latitude,
                longitude: longitude,
                address: address
            }
        });
    });
};
