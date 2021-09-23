function adicionar(){
    var novoGame = document.getElementById("link").value;
    if(novoGame.endsWith(".jpg") || novoGame.endsWith(".png")){
        listarGames(novoGame);
    } else{
        window.alert("Formato de imagem errado. Coloque no formato .jpg ou .png");
    }
    
    document.getElementById("link").value = "";
}

function listarGames(novoGame){
    var elementoGames = "<img src="+ novoGame + ">";
    var listaGame = document.getElementById("listaGame");
    listaGame.innerHTML = listaGame.innerHTML + elementoGames;
}
