describe('QueueService', function(){
    
    beforeEach(module('Queue'));

    var service;

    beforeEach(inject(function(_queueService_){
	service = _queueService_;
    }));

    it('should add a song',function(){
	service.addSong('assets/nada.mp3');

	var actual_music_list = service.getAllSongs();

	var expected_music_list = ['assets/nada.mp3'];

	expect(actual_music_list).toEqual(expected_music_list);
    });

    it('should play the list of songs',function(){
	//var createJS = jasmine.createSpyObj('createJS', ['Sound']);
	service.init = jasmine.createSpy('on');
	service.addSong({id: "cool", src: {mp3:"mp3/awesome.mp3", ogg:"noExtensionOggFile"}});

	service.play();

	expect(service.init).toHaveBeenCalled();
    });
    
});
