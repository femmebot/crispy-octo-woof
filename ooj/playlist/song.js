function Song(title, artist, duration) {
  Media.call(this, title, duration);  // the first parameter, this, sets itself as a new instance of Song
  this.artist = artist;
}

Song.prototype = Object.create(Media.prototype);  //  creates a prototype chain that copies the Media object's properties

Song.prototype.toHTML = function() {
  if (this.isPlaying){
    return ('<li class="current">' + this.title + ' - ' + this.artist + '<span class="duration">' + this.duration + '</span></li>');
  } else {
    return ('<li>' + this.title + ' - ' + this.artist + '<span class="duration">' + this.duration + '</span></li>');
  };
};
