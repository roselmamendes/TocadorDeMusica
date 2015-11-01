describe('QueueService', function(){
    
    beforeEach(module('Queue'));

    var service;

    beforeEach(inject(function(_queueService_){
	service = _queueService_;
    }));

    it('should add a song',function(){
	service.addSong('mp3/awesome.mp3');
	service.addSong('noExtensionOggFile');

	var actual_music_list = service.getAllSongs();

	var expected_music_list = [{id: "1", src: "mp3/awesome.mp3"},
				    {id: "2", src:"noExtensionOggFile"}];

	expect(actual_music_list[0].src).toEqual(expected_music_list[0].src);
	expect(actual_music_list[1].src).toEqual(expected_music_list[1].src);
    });

    it('should play the list of songs',function(){
	//var createJS = jasmine.createSpyObj('createJS', ['Sound']);
	service.init = jasmine.createSpy('on');
	service.addSong("mp3/awesome.mp3");

	service.play();

	expect(service.init).toHaveBeenCalled();
    });
    
});
