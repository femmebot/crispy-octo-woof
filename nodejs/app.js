// console.log("Hello World");

//Problem: We need a simple way to look at a user's badge count and JavaScript points
//Solution: Use Node.js to connect to Treehouse's API to get profile information to print out
var http = require("http");
var username = "chalkers";

function printMessage(username, badgeCount, points) {
  var message = username + " has " + badgeCount + " total badge(s) and " + points + "points in JavaScript";
  console.log(message);
};

//Connect to the API URL (http://teamtreehouse.com/username.json)
var request = http.get("http://teamtreehouse.com/" + username + ".json", function(response){
  console.log(response.statusCode);
  //Read the data
  var body = "";
  response.on("data", function(chunk){
    body += chunk;
    // console.log("BODY: " + chunk);
  });
  response.on("end", function(end){
    console.log(body);
  })
  //Parse the data
  //Print the data
});

request.on("error", function(error){
  console.error(error.message);
});
