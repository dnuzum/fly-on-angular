var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

var mongoose = require('mongoose');
var Airplane = require('./models/airplane');
mongoose.connect('mongodb://localhost/airplanes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public/'));

app.use('/api/airplanes', require('./controllers/airplane'));

app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000);
