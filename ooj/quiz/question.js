// Question constructor
function Question(questionText, choices, answer) {
  this.questionText = questionText;
  this.choices = choices;
  this.answer = answer;
}

Question.prototype.isCorrectAnswer = function (choice) {
  return this.answer === choice;
};
