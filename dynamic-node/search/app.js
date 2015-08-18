// Problem: Create a way to view a user's badge count, js points from a web browser
// Solution: Use Node.js to perform profile lookups and serve template via HTTP

// create a web server

// handle the HTTP route GET / and POST / i.e., Home
  // if url == "/" && GET
    // show search field
  // if url == "/" && POST
    // redirect to /:username

// handle HTTP route for GET / username i.e., /username
  // if url == "/..."
    // get JSON from treehouse
      // on "end"
        // show the profile
      // if there's an error
        // show the error

// function that handles reading of files (templates) and populate with values
  // read from file and get a string
    // merge values into string
