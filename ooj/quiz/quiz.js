function Quiz(questionsArray) {
  this.questions = questionsArray;
  this.currentQuestionIndex = 0;
  this.score = 0;
}

Quiz.prototype.guess = function(answer) {
  if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
    this.score ++;
  }
  this.currentQuestionIndex ++;
};

Quiz.prototype.getCurrentQuestion = function() {
  return this.questionsArray[this.currentQuestionIndex];
};

Quiz.prototype.hasEnded = function() {
  return this.currentQuestionIndex >= this.questionsArray.length;
};

Playlist.prototype.select = function() {
  this.stop();
  this.nowPlayingIndex ++;
  if (this.nowPlayingIndex === this.songs.length) {
    this.nowPlayingIndex = 0;
  }
  this.play();
};

Playlist.prototype.renderIn = function(list) {
  list.innerHTML = "";
  for (var i = 0; i < this.songs.length; i++) {
    list.innerHTML += this.songs[i].toHTML();
  };
};
