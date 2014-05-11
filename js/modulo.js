/**
* Created with TocadorDeMusica.
* User: roselmamendes
* Date: 2014-05-11
* Time: 08:14 PM
* To change this template use Tools | Templates.
*/

$(document).ready(function(){
    
    init();    
    
});

function init(){
    
     if (!createjs.Sound.initializeDefaultPlugins()) {
         return;
     }

    var audioPath = "assets/";
    var manifest = [
        {id:"Music",src:"18-machinae_supremacy-lord_krutors_dominion.ogg"},
        {id:"Thunder",src:"Thunder1.ogg"}
    ];
    createjs.Sound.alternateExtensions = ["mp3"];
    
    createjs.Sound.addEventListener("loadComplete",handleLoad);
    createjs.Sound.registerManifest(manifest,audioPath);
    
}

function handleLoad(event){
    
    createjs.Sound.play(event.src);
    
}