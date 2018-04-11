var express = require('express');
var app = express();
var path = require('path');

app.use('/js', express.static(__dirname + '/dist/js'))

// viewed at http://localhost:3001
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(3001);