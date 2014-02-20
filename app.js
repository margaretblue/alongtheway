var express = require('express'),
    path = require('path'),
    app = express();

app.configure(function () {

});
app.use(express.static(path.join(__dirname, 'app')));

app.get('/', function (req, res) {
    res.sendfile('./app/views/index.html');
});

app.post('/', require('./index_post.js'));

var port = process.env.PORT || 5000;

app.listen(port, function () {
    console.log('Listening on ' + port);
});
