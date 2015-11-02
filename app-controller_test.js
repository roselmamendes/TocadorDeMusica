describe('AppController', function(){

    beforeEach(module('App'));

    var controller;
    var QueueServiceMock;

    beforeEach(inject(function(_$controller_){
	controller = _$controller_;

	QueueServiceMock = {
	    addSong: function(music){},
	    getAllSongs: function(){return [{id: '1', src: 'test.mp3'}]}
	};
	
    }));

    it('add a song', function(){
	var scope = controller('AppController', { queueService: QueueServiceMock });
	spyOn(QueueServiceMock, 'addSong').and.callThrough();
  
	scope.addSong('musica.mp3');

	expect(QueueServiceMock.addSong).toHaveBeenCalled();
	
	
    });

    it('update list of music', function(){
	var scope = controller('AppController', { queueService: QueueServiceMock });

	scope.updateMusicList();
	
	expect(scope.queue).toEqual([{id: '1', src: 'test.mp3'}])
    });
    
});
