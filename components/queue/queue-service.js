angular.module('Queue')
    .service('queueService',function(){

	var queue = [];
	
	var service = {
	    addSong: function(music){
		queue.push(music);
	    },
	    getAllSongs: function(){
		return queue;
	    }
	}
	return service;
    });
