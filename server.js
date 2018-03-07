const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const htmlRoutes = require('./app/routing/htmlRoutes.js');
const apiRoutes = require('./app/routing/apiRoutes.js');

//telling node we are creating an express server
const app = express();

//setting an inital port 
const PORT = process.env.PORT || 3000;

//setting up express to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static("public"));

//Informing and pointing the server to a series of route files used in the project
app.use('/', htmlRoutes);
app.use('/survey', htmlRoutes);

apiRoutes(app);

//starting the server to begin listening
app.listen(PORT, function(err) {
	if (err) {
		console.log(err)
	} else{
	console.log(`Connected. Listening on PORT ${PORT}`);
	}
})