$.getJSON('data/employees.json', function(response){
  var $statusHTML = $('<ul class="bulleted"></ul>');
  //$.each(data, function(index, value){})
  $.each(response, function(index, employee){
    if (employee.inoffice) {
      $statusHTML.append( '<li class="in">' + employee.name + '</li>' );
    } else {
      $statusHTML.append( '<li class="out">' + employee.name + '</li>' );
    };
    // console.log($statusHTML);
  });
  // insert the full list into #employeeList
  $('#employeeList').html($statusHTML);
});
