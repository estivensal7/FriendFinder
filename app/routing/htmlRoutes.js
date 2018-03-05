//declaring dependancies 
const express = require('express');
const path = require('path');
const app = express();

//catch-all GET method
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../public/home.html'));
});

//survey GET method
app.get('/survey', function(req, res) {
	res.sendFile(path.join(__dirname, '../public/survey.html'));
});

module.exports = app;