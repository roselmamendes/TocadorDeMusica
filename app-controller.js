angular.module('App').
    controller('AppController', function(queueService){
	var scope = this;
	scope.queue = [];
    scope.music = "teste";
	scope.addSong = function(music){
	   queueService.addSong(music);
	};

    scope.todos = [
        {id:"teste", src: "teste.mp3"}
    ];
    
	scope.updateMusicList = function(){
	    scope.queue = queueService.getAllSongs();
	}
	
    });
