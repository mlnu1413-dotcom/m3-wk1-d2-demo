var express = require('express');
var app = express();

var router = require('./exp_demo3a');

app.use('/routedemo', router);

app.listen(3000);