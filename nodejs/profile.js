//Problem: We need a simple way to look at a user's badge count and JavaScript points
//Solution: Use Node.js to connect to Treehouse's API to get profile information to print out
var http = require("http");

function printMessage(username, badgeCount, points) {
  var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
  console.log(message);
};

function printError(error){
  console.error(error.message);
};

function getProfile(username){
  //Connect to the API URL (http://teamtreehouse.com/username.json)
  var request = http.get("http://teamtreehouse.com/" + username + ".json", function(response){
    // console.log(response.statusCode); ?≥
    //Read the data
    var body = "";
    response.on("data", function(chunk){
      body += chunk;
      // console.log("BODY: " + chunk);
    });
    response.on("end", function(end){
      if(response.statusCode === 200){
        try {
          //Parse the data
          var profile = JSON.parse(body);
          //Print the data
          printMessage(username, profile.badges.length, profile.points.JavaScript);
          // console.dir(profile);
        } catch (error) {
          // Parse error
          printError(error);
        };
      } else {
        // Status Code error
        printError({message: "Error getting profile for " + username + ". (" + http.STATUS_CODES[response.statusCode] + ")"});
      }
    });
  });

  // Connection error
  request.on("error", printError);
};

module.exports.get = getProfile; // you can use any word other than get to name your exported module
