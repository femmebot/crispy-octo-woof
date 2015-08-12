var playlist = new Playlist();

var stickToMySide = new Song("Stick to My Side", "Pantha du Prince", "7:51");
var labrador = new Song("Labrador", "Terranova", "9:16");
var moreThanThis = new Song ("More Than This", "Roxy Music", "4:30");

var exMachina = new Movie("Ex Machina", "1:48:00", "2014");
var madMaxFuryRoad = new Movie("Mad Max Fury Road", "2:00:00", "2015");


playlist.add(stickToMySide);
playlist.add(labrador);
playlist.add(moreThanThis);
playlist.add(madMaxFuryRoad);
playlist.add(exMachina);

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
