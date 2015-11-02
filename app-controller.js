angular.module('App').
    controller('AppController', function(queueService){
	var scope = this;
	scope.queue = [];
	scope.addSong = function(music){
	   queueService.addSong(music);
	};

	scope.updateMusicList = function(){
	    scope.queue = queueService.getAllSongs();
	}
	
    });
