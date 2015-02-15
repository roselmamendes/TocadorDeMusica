describe("For play a song", function(){
	//var createjs = require("./soundjs");
	var Player = require("../js/Player");
	var player = null;
	var songsToAdd = ["FrevoRasgado.mp3", "nada.mp3"]

	beforeEach(function(){
		player = new Player();
	});

	it("should start a player", function(){
		player.init(songsToAdd);
		expect(player.getSongQueue()).toBe(songsToAdd);
	});

	it("should allow to add songs to queue", function(){
		var expectedsongs = ["FrevoRasgado.mp3", "nada.mp3","02.ogg"];
		player.init(songsToAdd);
		player.addSong("02.ogg");
		expect(player.getSongQueue()).toEqual(expectedsongs);
	});

	/*it("should call createjs.Sound.play method", function(){
		spyOn(createjs.Sound,"play");
		player.play();
		expect(player.play).toHaveBeenCalledWith(songsToAdd);
	});*/
});