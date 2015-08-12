function Playlist() {
  this.songs = [];
  this.nowPlayingIndex = 0;
}

Playlist.prototype.add = function(song) {
  this.songs.push(song);
};

Playlist.prototype.play = function() {
  this.songs[this.nowPlayingIndex].play();
};

Playlist.prototype.stop = function(){
  this.songs[this.nowPlayingIndex].stop();
};

Playlist.prototype.next = function() {
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
