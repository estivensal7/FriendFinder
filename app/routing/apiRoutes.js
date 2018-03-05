//This file sets routes for displaying and saving data to the database
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//Depenencies
const friendsDb = require('../data/friends.js');
const path = require('path');
const express = require('express');

const app = express();
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Routes
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//Setting the file to be ready to export with post and get methods inside of a function

module.exports = function() {

	//retrieving information for get method from friendsDb
	app.get(friendsDb, function(req, res) {
		return res.json(friends);
	});

	//once a user submits data to add a new "friend".. we will send it to the friends.js file
	app.post(friendsDb, function(req, res) {

		let bestFriend = {
			name: "",
			photo: "",
			friendDiff: 1000
		};

		let userData = req.body;
		let userScores = userData.scores;
		let totalDiff = 0;

		//looping through the friendsDb to compare scores
		for(let i = 0; i < friendsDb.length; i++) {

			totalDiff = 0;

			//looping through the scores of each friend to find best match
			for(let j = 0; j < friends[i].scores[j]; j++) {

				//calculating differences between friends' scores and summing them into the totalDiff
				totalDiff += math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

				//finding the best match
				if (totalDiff <= bestFriend.friendDifference) {
					bestFriend.name = friends[i].name;
					bestFriend.photo = friends[i].photo;
					bestFriend.friendDifference = totalDiff;
				}
			}
		}

		//pushing userData to to friends DB
		friends.push(userData);

		res.json(bestFriend);
	});
}

module.exports();