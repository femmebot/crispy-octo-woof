var Profile = require("./profile.js");

// handle the HTTP route GET / and POST / i.e., Home
function home(request, response) {
  if(request.url === "/"){
  // if url == "/" && GET
    // show search field
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Header\n");
    response.write("Search\n");
    response.end('Footer\n');
  // if url == "/" && POST
    // redirect to /:username
  };
};

// handle HTTP route for GET / username i.e., /username
function user(request, response){
  // if url == "/..."
  var username = request.url.replace("/", "");

  if (username.length > 0) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Header\n"); // response.write(chunk[, encoding][, callback])

    // get JSON from treehouse
    var studentProfile = new Profile(username);  // see ./profile.js

    // on "end"
    studentProfile.on("end", function(profileJSON){
      // show the profile

      // store values we need
      var values = {
        avatarURL: profileJSON.gravatar_url,
        username: profileJSON.profile_name,
        badges: profileJSON.badges.length,
        javaScriptPoints: profileJSON.points.JavaScript
      };

      // Simple response
      response.write(values.username + " has " + values.badges + " badges " + "\n");
      response.end("Footer\n");
    });

    // if there's an error
    studentProfile.on("error", function(error){
      // show the error
      response.write(error.message + "\n");
      response.end("Footer\n");
    });

  };
};

module.exports.home = home;
module.exports.user = user;
