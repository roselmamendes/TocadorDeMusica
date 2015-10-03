angular.module('Queue')
    .service('queueService',function(){

	var queue = [];
	var sounds;

	var loadHandler = function(event) {
	    var instance = createjs.Sound.play("sound");
	    instance.on("complete", this.handleComplete, this);
	    instance.volume = 0.5;
	}
	
	var service = {
	    init: function(){
		createjs.Sound.alternateExtensions = ["mp3"];
		createjs.Sound.on("fileload", loadHandler, this);
		sounds = {path:"./", manifest: queue};
	    },
	    addSong: function(music){
		queue.push(music);
	    },
	    getAllSongs: function(){
		return queue;
	    },
	    play: function(){
		this.init();
	    }
	}
	return service;
    });
