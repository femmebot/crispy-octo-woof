
// used an object literal since there's only one quiz UI
// see dice exercise, dice.js to review

var QuizUI = {
  displayNext: function () {
    if (quiz.hasEnded()) {
      this.displayScore();
    } else {
      this.displayQuestion();
      this.displayChoices();
      this.displayProgress();
    }
  },
  displayQuestion: function () {
    this.populateIDWithHTML("question", quiz.getCurrentQuestion().questionText);
  },
  displayChoices: function () {
    var choices = quiz.getCurrentQuestion().choices;
    for (var i = 0; i < choices.length; i++) {
      this.populateIDWithHTML("choice" + i, choices[i]);
      this.guessHandler("guess" + i, choices[i]);
    };
  },
  displayScore: function () {
    var gameOverHTML = "<h1>Game Over</h1>";
    gameOverHTML += "<h2>Your score is: " + quiz.score + "</h2>";
    this.populateIDWithHTML("quiz", gameOverHTML);
  },
  populateIDWithHTML: function (id, text) {
    var element = document.getElementById(id);
    element.innerHTML = text;
  },
  guessHandler: function (id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
      quiz.guess(guess);
      QuizUI.displayNext();
    };
  },
  displayProgress: function () {
    var currentQuestionNumber = quiz.currentQuestionIndex + 1;
    this.populateIDWithHTML("progress", "Question " + currentQuestionNumber + " of " + quiz.questions.length);
  }

};
