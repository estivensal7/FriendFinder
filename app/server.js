const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');

//telling node we are creating an express server
const app = express();

//setting an inital port 
const PORT = process.env.PORT || 3000;

//setting up express to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//Informing and pointing the server to a series of route files used in the project
require("./app/routing/apiRoutes.js")(app, path);
// require("./app/routing/htmlRoutes.js")(app, path);

//starting the server to begin listening
app.listen(PORT, function(err) {
	if (err) {
		console.log(err)
	} else{
	console.log(`Connected. Listening on PORT ${PORT}`);
	}
})