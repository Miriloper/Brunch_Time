
var game = new Game ()
window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    document.getElementById("menuGame").style.display = "none";
    document.getElementById("canvasElem").style.display = "block";
    startGame();
  };

  startGame = ()=>{
    console.log(data)
    //importar el json
    game.init("myCanvas");
  }
}
