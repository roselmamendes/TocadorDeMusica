angular.module('Queue')
    .service('queueService',function(){

	var queue = [];
	var sounds;

	var loadHandler = function(event) {
	    var instance = createjs.Sound.play(event.src);
	    instance.on("complete", this.handleComplete, this);
	    instance.volume = 0.5;
	}
	
	var service = {
	    init: function(){
		createjs.Sound.alternateExtensions = ["mp3"];
		createjs.Sound.addEventListener("fileload", handleLoad);
		createjs.Sound.registerSounds(queue,"./");
	    },
	    addSong: function(music){
		queue.push({id: (queue.length + 1).toString(), src: music});
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
