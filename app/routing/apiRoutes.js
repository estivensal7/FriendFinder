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
        let bestFriend = {
            name: "",
            photo: "",
            friendDiff: 1000
        };

        let userData = req.body;
        let userScores = userData.scores;

        let totalDiff;

        // console.log(userScores);
        //looping through the friendsDb to compare scores
        for (let i = 0; i < friendsDb.length; i++) {
            var currentFriend = friendsDb[i];
            totalDiff = 0;


            //looping through the scores of each friend to find best match
            for (let j = 0; j < currentFriend.scores.length; j++) {
                var currentFriendScore = currentFriend.scores[j];
                var currentUserSore = userScores[j];

                //calculating differences between friends' scores and summing them into the totalDiff
                totalDiff += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));

                }

                //finding the best match
                if (totalDiff <= bestFriend.friendDifference) {

                    bestFriend.name = currentFriend.name;
                    bestFriend.photo = currentFriend.photo;
                    bestFriend.friendDifference = totalDiff;
                }
            }

            //pushing userData to to friends DB
            friends.push(userData);

            res.json(bestFriend);
        });
}