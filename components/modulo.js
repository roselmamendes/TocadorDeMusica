var tocando;

function init(){                
    
    if(tocando != undefined && tocando.playState == createjs.Sound.PLAY_FINISHED){


        tocando.play();

    }
    else{

        //console.log("Deu erro no plugin");
        if (!createjs.Sound.initializeDefaultPlugins()) {
            
            //document.getElementById("centro").innerHTML = "Deu erro no plugin";
            console.log("Deu erro no plugin");
            return;
        }

        var audioPath = "assets/";
        var manifest = [
        {id:"Music",src:"FrevoRasgado.mp3"}
        ];
        
        createjs.Sound.alternateExtensions = ["mp3"];

        createjs.Sound.addEventListener("fileload",handleLoad);
        createjs.Sound.registerManifest(manifest,audioPath);

    }
    
}

function parar(){
    tocando.stop();
}

function handleLoad(event){

    tocando = createjs.Sound.play(event.src);

}
