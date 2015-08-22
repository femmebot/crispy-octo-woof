var router = require('./router.js');

// Problem: Create a way to view a user's badge count, js points from a web browser
// Solution: Use Node.js to perform profile lookups and serve template via HTTP

// create a web server
var http = require('http');
http.createServer(function (request, response) {
  router.home(request, response);
  router.user(request, response);
  router.stylesheet(request, response);

  // response.writeHead(200, {'Content-Type': 'text/plain'});
  // setInterval(function(){
  //   response.write(new Date() + "\n");
  // }, 1000);
  // response.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');


// function that handles reading of files (templates) and populate with values
  // read from file and get a string
    // merge values into string
