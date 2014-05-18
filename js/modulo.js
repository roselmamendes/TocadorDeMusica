function init(){                
    
//    console.log("Deu erro no plugin");
    if (!createjs.Sound.initializeDefaultPlugins()) {
        
        //document.getElementById("centro").innerHTML = "Deu erro no plugin";
        console.log("Deu erro no plugin");
        return;
    }

    var audioPath = "assets/";
    var manifest = [
    {id:"Music",src:"nada.mp3"}
    ];
    
    createjs.Sound.alternateExtensions = ["mp3"];

    createjs.Sound.addEventListener("fileload",handleLoad);
    createjs.Sound.registerManifest(manifest,audioPath);
    
}

function handleLoad(event){

    createjs.Sound.play(event.src);


}
