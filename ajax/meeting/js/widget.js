$.getJSON('data/rooms.json', function (data) {
  var $statusHTML = $('<ul class="rooms"></ul>');
  $.each(data,function (index, mtgroom) {
    if (mtgroom.available) {
      $statusHTML.append('<li class="empty">' + mtgroom.room + '</li>');
    } else {
      $statusHTML.append('<li class="full">' + mtgroom.room + '</li>');
    };
  });
  $('#roomList').html($statusHTML);
}); // end getJSON

$.getJSON('data/employees.json', function (data) {
  var $statusHTML = $('<ul class="bulleted"></ul>');
  $.each(data,function (index, employee) {
    if (employee.inoffice) {
      $statusHTML.append('<li class="in">' + employee.name + '</li>');
    } else {
      $statusHTML.append('<li class="out">' + employee.name + '</li>');
    };
  });
  $('#employeeList').html($statusHTML);
}); // end getJSON
