// get walking directions from central park to the empire state building
var Key = require('../javascripts/keys');
var https = require("https");
 //url = "http://maps.googleapis.com/maps/api/directions/json?origin=Central Park&destination=Empire State Building&sensor=false&mode=walking";
    var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=food&name=harbour&sensor=false&key=" + Key();


// get is a simple wrapper for request()
// which sets the http method to GET
var request = https.get(url, function (response) {
    // data is streamed in chunks from the server
    // so we have to handle the "data" event
    var buffer = "",
        data,
        route;

    response.on("data", function (chunk) {
        buffer += chunk;
    });

    response.on("end", function (err) {
        // finished transferring data
        // dump the raw data
        console.log(buffer);
        console.log("\n");
        data = JSON.parse(buffer);
        //route = data.routes[0];
        results = data.results[0];
        //results = data.status;

        console.log("First Space Place: " + results.name);
        //console.log("Walking Distance: " + route.legs[0].distance.text);
        //console.log("Time: " + route.legs[0].duration.text);
    });
});
