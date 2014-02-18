var express = require('express'),
    app = express();

app.configure(function () {
    
});

app.get('/', function (req, res) {
    res.sendfile('./app/views/index.html');
});

var port = process.env.PORT || 5000;

app.listen(port, function () {
    console.log('Listening on ' + port);
});
