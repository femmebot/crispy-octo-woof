var playlist = new Playlist();

var stickToMySide = new Song("Stick to My Side", "Pantha du Prince", "7:51");
var labrador = new Song("Labrador", "Terranova", "9:16");
var moreThanThis = new Song ("More Than This", "Roxy Music", "4:30");

playlist.add(stickToMySide);
playlist.add(labrador);
playlist.add(moreThanThis);

var playlistElement = document.getElementById("playlist");
playlist.renderIn(playlistElement);

// $('#play').click(playlist.play);
// $('#next').click(playlist.next);
// $('#stop').click(playlist.stop);

var playBtn = document.getElementById("play");
playBtn.onclick = function(){
  playlist.play();
  playlist.renderIn(playlistElement);
};

var nextBtn = document.getElementById("next");
nextBtn.onclick = function(){
  playlist.next();
  playlist.renderIn(playlistElement);
};

var stopBtn = document.getElementById("stop");
stop.onclick = function(){
  playlist.stop();
  playlist.renderIn(playlistElement);

};
