var fs = require('fs');
// var filepath = '/Users/phoebe/GitHub/crispy-octo-woof/dynamic-node/search/';


function mergeValues(values, content){
  // cycle through the keys of the values
  for (var key in values){
    // replace all {{key}} with the value from the values object
    // since we can't use dot notation, we use square brackets to access the key's value
    content = content.replace("{{" + key + "}}", values[key]);
  };
  // return merged content
  return content;
};

function view (templateName, values, response) {
  // read from the template file
  var fileContents = fs.readFileSync(__dirname + '/views/' + templateName + '.html', {encoding: 'utf8'});
  // insert values into content
  fileContents = mergeValues(values, fileContents);
  // write out to the response
  response.write(fileContents);
};

module.exports.view = view;
