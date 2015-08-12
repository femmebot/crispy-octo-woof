function Song(title, artist, duration) {
  this.title = title;
  this.artist = artist;
  this.duration = duration;
  this.isPlaying = false;
}

Song.prototype.play = function() {
  this.isPlaying = true;
};

Song.prototype.stop = function() {
  this.isPlaying = false;
};

Song.prototype.toHTML = function() {
  if (this.isPlaying){
    return ('<li class="current">' + this.title + ' - ' + this.artist + '<span class="duration">' + this.duration + '</span></li>');
  } else {
    return ('<li>' + this.title + ' - ' + this.artist + '<span class="duration">' + this.duration + '</span></li>');
  };
};
