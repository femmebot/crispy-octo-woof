var Profile = require('./profile.js');
var renderer = require('./renderer.js');
var querystring = require('querystring');

var commonHeaders = {'Content-Type': 'text/html'};

// handle the HTTP route GET / and POST / i.e., Home
function home(request, response) {
  if(request.url === "/"){
    // if url == "/" && GET
    // see message.method documentation
    if (request.method.toLowerCase() === "get"){
      // show search template
      response.writeHead(200, commonHeaders);
      renderer.view('header', {}, response);
      renderer.view('search', {}, response);
      renderer.view('footer', {}, response);
      response.end();
    } else {
    // if url == "/" && POST
      // get the post data from body
      // since we're doing a server, the request is an incoming message
      request.on('data', function(postBody){
        console.log(postBody.toString());
        // extract the username
        var query = querystring.parse(postBody.toString());
        // response.write(query.username);

        response.writeHead(303, { "Location": "/" + query.username })
        response.end();
        // redirect to /:username
      });

    };
  };
};

// handle HTTP route for GET / username i.e., /username
function user(request, response){
  // if url == "/..."
  var username = request.url.replace("/", "");

  if (username.length > 0) {
    response.writeHead(200, commonHeaders);
    renderer.view('header', {}, response); // response.write(chunk[, encoding][, callback])

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
      renderer.view('profile', values, response);
      renderer.view('footer', {}, response);
      response.end();
    });

    // if there's an error
    studentProfile.on("error", function(error){
      // show the error
      renderer.view('error', {errorMessage: error.message}, response);
      renderer.view('search', {}, response);
      renderer.view('footer', {}, response);
      response.end();
    });

  };
};

function stylesheet (request, response){
  if(request.url.indexOf('.css') != -1){ //request.url has the pathname, check if it conatins '.css'
    fs.readFile(__dirname + '/css/stylesheet.css', function (err, data) {
      if (err) console.log(err);
      response.writeHead(200, {'Content-Type': 'text/css'});
      response.write(data);
      response.end();
    });
  };
};

module.exports.home = home;
module.exports.user = user;
module.exports.stylesheet = stylesheet;
