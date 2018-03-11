//This file sets routes for displaying and saving data to the database
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Depenencies
const path = require('path');
// const express = require('express');
// const app = express();
const friendsDb = require('../data/friends.js');
const bodyParser = require('body-parser');
// const fs = require('fs');
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Routes
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Setting the file to be ready to export with post and get methods inside of a function
module.exports = function(app) {
    //retrieving information for get method from friendsDb
    app.get("/api/friendsList", function(req, res) {
       	res.json(friendsDb);
    });

	//once a user submits data to add a new "friend".. we will send it to the friends.js file
	app.post("/api/findFriend", function(req, res) {

	        let userData = req.body;
	        let userScores = userData['scores[]'];
	        let bestFriend = {
	        	name: userData.name,
	        	photo: userData.photo,
	        	scores: userScores
	        }

	        

	        let totalDiff = 1000
	        let friendsScores = [];
	        let bestMatch = [];


	        friendsDb.forEach((friend) => {
	        	let compArray = [];

	        	friend.scores.forEach((score) => {
	        		let i = 0;
					let matchScores = Math.abs(parseInt(score) - bestFriend.scores[i]);
					compArray.push(matchScores);
					i++;	        		
	        	})
	        	let compareScores = compArray.reduce((a,b) => a + b, 0);
	        	bestMatch.push(compareScores);
	        	compArray = [];
	        })

	        const returnedMatch = bestMatch.indexOf(Math.min.apply(Math, bestMatch));
	        res.json(friendsDb[returnedMatch]);
	        friendsDb.push(bestFriend);
	    })
}

