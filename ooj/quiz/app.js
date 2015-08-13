// Create questions
// Instances created inline without having to assign each to a variable first, then pushing them into an array
var questions = [
  new Question("Who is the President of the United States?", ["Barack Obama", "Joe Biden"], "Barack Obama"),
  new Question("Who is Angela Merkel?", ["Prime Minister of Germany", "Chancellor of Germany"], "Chancellor of Germany"),
  new Question("Kuala Lumpur is the capital of what country?", ["Indonesia", "Malaysia"], "Malaysia")
];

// Create Quiz
var quiz = new Quiz(questions);

// Display Quiz
QuizUI.displayNext();
