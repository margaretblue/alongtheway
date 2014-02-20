var Key = require('../javascripts/keys');
var https = require("https");
    var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=food&name=harbour&sensor=false&key=" + Key();

var request = https.get(url, function (response) {
    var buffer = "",
        data,
        route;

    response.on("data", function (reply) {
        buffer += reply;
    });

    response.on("end", function (err) {
        console.log(buffer);
        console.log("\n");
        data = JSON.parse(buffer);
        results = data.results[0];
        //results = data.status;

        console.log("First Space Place: " + results.name);
    });
});
