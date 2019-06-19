let word = ""
let wordClouds = ["banana", "apple", "bagel"] //clouds en pantalla
let filtClouds = [];

window.addEventListener("keydown", function (e) {
  //tested in IE/Chrome/Firefox
  
    document.getElementById("key").innerHTML = "";
    document.getElementById("keyCode").innerHTML = "";
    document.getElementById("wordsOK").innerHTML = "";
    document.getElementById("resultEnt").innerHTML = "";
    //clear cosas
  
  var key = e.key;
  
  if (isLetterOrSpace(key))
    {
        document.getElementById("key").innerHTML = e.key;   
        word += e.key;
        document.getElementById("word").innerHTML = word; 
        filtClouds = wordClouds.filter( wordCloud => wordCloud.startsWith(word));
        let wordsArray = (word.length == 0) ? wordClouds : filtClouds
        document.getElementById("wordsOK").innerHTML = wordsArray;
        
        
    }
  else if (e.keyCode == 13)
    {
       document.getElementById("key").innerHTML = "ENTER";
      if (filtClouds.length == 1) {
        document.getElementById("resultEnt").innerHTML = areEqual(filtClouds[0], word);
       }
      else {
        document.getElementById("resultEnt").innerHTML = "false";
      }
       word = ""; //esto clear la palabra
    }
    
})

function isLetterOrSpace(str) {
  return str.length === 1 && str.match(/^[A-Za-z ]+$/);
}

//var nube3 = "banana";
function areEqual (param1, param2) {
  return (param1 === param2);
}
