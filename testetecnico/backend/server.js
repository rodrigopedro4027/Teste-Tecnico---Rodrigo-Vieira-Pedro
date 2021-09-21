var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app =  express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.listen(3000);