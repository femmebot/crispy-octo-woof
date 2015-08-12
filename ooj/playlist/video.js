function Movie(title, duration, year) {
  Media.call(this, title, duration);  // the first parameter, this, sets itself as a new instance of Song
  this.year = year;
}

Movie.prototype = Object.create(Media.prototype);  //  creates a prototype chain that copies the Media object's properties

Movie.prototype.toHTML = function() {
  if (this.isPlaying){
    return ('<li class="current">' + this.title + ' (' + this.year + ') <span class="duration">' + this.duration + '</span></li>');
  } else {
    return ('<li>' + this.title + ' (' + this.year + ') <span class="duration">' + this.duration + '</span></li>');
  };
};
