var fs = require('fs');
var filepath = '/Users/phoebe/GitHub/crispy-octo-woof/dynamic-node/search/';

function view (templateName, values, response) {
  // read from the template file
  var fileContents = fs.readFileSync(filepath + 'views/' + templateName + '.html');
    // if (error) throw error;
  response.write(fileContents);
  // insert values into content

  // write out to the response
};

module.exports.view = view;
