function Player(){
};

var songQueue =[];

Player.prototype.init = function(songs){
	songQueue = songs;
};

Player.prototype.addSong = function(song){
	songQueue[songQueue.length] = song;
};

Player.prototype.getSongQueue = function(){
	return songQueue;
};

Player.prototype.play = function(){
		return;
};

module.exports = Player;