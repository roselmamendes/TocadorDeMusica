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
    
});
