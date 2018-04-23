var express = require('express');
var app = express();
var path = require('path');

app.use('/js', express.static(__dirname + '/release/js'))

// viewed at http://localhost:3002
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/release/index.html'));
});

app.listen(3002);