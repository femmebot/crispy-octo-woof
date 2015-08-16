// console.log("Hello World");
var profile = require("./profile.js");  // .js at the end is optional
var users = ["chalkers", "joykesten2"];

// users.forEach(function(username){
//   profile.get(username);
// });

// users.forEach(profile.get);  // this works because forEach only takes one parameter

// console.log(process.argv)

var usernames = process.argv.slice(2);  // index 2 of argv array

usernames.forEach(profile.get);
