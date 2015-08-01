var students = [
  { name: 'Dave', track: 'Front End Development', achievements: 158, points: 14730 },
  { name: 'Jody', track: 'iOS Development with Swift', achievements: '175', points: '16375' },
  { name: 'Jordan', track: 'PHP Development', achievements: '55',points: '2025' },
  { name: 'John', track: 'Learn WordPress', achievements: '40', points: '1950' },
  { name: 'Trish', track: 'Rails Development', achievements: '5', points: '350' }
];
var message = '';
var student;
var search;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function getStudentReport( student ) {
  var report = '<h2>Student: ' + student.name + '</h2>';
  report += '<p>Track: ' + student.track + '</p>';
  report += '<p>Points: ' + student.points + '</p>';
  report += '<p>Achievements: ' + student.achievements + '</p>';
  return report;
}

while (true) {
  search = prompt('Search student records: type a name [Jody] (or type "quit" to end)');
  if (search === null || search.toLowerCase() === 'quit') {
    break;
  }
  for (var i = 0; i < students.length; i += 1) {
    student = students[i];
    if ( student.name === search ) {
      message = getStudentReport( student );
      print(message);
    }
  }
}
