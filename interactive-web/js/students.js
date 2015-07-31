var students = [
  {
   name: 'Dave',
    track: 'Front End Development',
    achievements: 158,
    points: 14730
  },
  {
    name: 'Jody',
    track: 'iOS Development with Swift',
    achievements: '175',
    points: '16375'
  },
  {
    name: 'Jordan',
    track: 'PHP Development',
    achievements: '55',
    points: '2025'
  },
  {
    name: 'John',
    track: 'Learn WordPress',
    achievements: '40',
    points: '1950'
  },
  {
    name: 'Trish',
    track: 'Rails Development',
    achievements: '5',
    points: '350'
  }
];

function studentRecords() {
  var whichStudent;
  for (i = 0; i <= students.length; i++) {
    whichStudent = students[i];
    for (var prop in whichStudent) {
      console.log(prop, ': ', whichStudent[prop]);
    }
  };
};

studentRecords();
