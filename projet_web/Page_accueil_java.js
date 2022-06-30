var tps;
var compteur = -1;
var defilement = 0;
var nbImg = 5;
var imagetot1 = ["image/Image1.jpg", "image/Image2.jpg", "image/Image3.jpg", "image/Image4.jpg", "image/Image5.jpg", "image/Image6.jpg", "image/Image7.jpg", "image/Image8.jpg"];
var imagetot2 = ["image/Image9.jpg", "image/Image10.jpg", "image/Image11.jpg", "image/Image12.jpg", "image/Image13.jpg", "image/Image14.jpg", "image/Image15.jpg", "image/Image16.jpg", "image/Image17.jpg", "image/Image18.jpg"];
var imagetot3 = ["image/Image19.jpg", "image/Image20.jpg", "image/Image21.jpg", "image/Image22.jpg", "image/Image23.jpg"];
var imagetot4 = ["image/Image24.jpg", "image/Image25.jpg", "image/Image26.jpg", "image/Image27.jpg", "image/Image28.jpg", "image/Image29.jpg"];
var imagetot5 = ["image/Image30.jpg", "image/Image31.jpg", "image/Image32.jpg", "image/Image33.jpg"];
var img;
var compteur2;
var valrand1, valrand2, valrand3, valrand4, valrand5;

function toggle() {  //modif
    var blur=document.getElementById('blur');
    blur.classList.toggle('active');
}
function ccookie(){
document.cookie = "oui=1; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/";  
}

function dcookie(){
	document.cookie = "oui=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function ocookie() {
  let name = "oui=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function togglecheck() {
  let user = ocookie();
  if (user != "") {
    verif();
  } else {
    toggle();
	verif();
	popup();
	ccookie();
  }
} 

function popup(){ //modif
    var result = confirm("ATTENTION! contenu sensible, avez vous plus de 18 ans?");
    if(result)  {
        toggle();
    } else {
        window.open('https://www.youtube.com/watch?v=db3F-gakTc0', '_self');
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function aleatoire(){
        valrand1 = getRandomInt(7);
        valrand2 = getRandomInt(9);
        valrand3 = getRandomInt(4);
        valrand4 = getRandomInt(5);
        valrand5 = getRandomInt(3);
}

function verif(){
    img = document.getElementById("image");
      if (defilement == 0) {
          defilement = 1;
          dem_diapo();
      }
      else{
          clearTimeout(tps);
          defilement = 0;
      }
  }


function dem_diapo(){
    tps = setTimeout(dem_diapo, 10000);
    compteur++;
    diaporama(compteur);
}

function suivant(){
    compteur++;
    diaporama(compteur);
}

function retour(){
    compteur--;
    diaporama(compteur);
}

function diaporama(n){
    document.getElementById("point1").style.backgroundColor = "#bbb";
    document.getElementById("point2").style.backgroundColor = "#bbb";
    document.getElementById("point3").style.backgroundColor = "#bbb";
    document.getElementById("point4").style.backgroundColor = "#bbb";
    document.getElementById("point5").style.backgroundColor = "#bbb";
    if (n > nbImg - 1) {
        n = 0;
        compteur = 0;
    }
    if (n < 0){
        n = nbImg - 1;
        compteur = nbImg - 1;
    }
    if (n == 0) {
        document.getElementById("ancre").href = "#a1";
        img.src = imagetot1[valrand1];
        document.getElementById("texte").innerHTML = "Ciel";
        document.getElementById("point1").style.backgroundColor = "black";
    }
    if (n == 1) {
        document.getElementById("ancre").href = "#a2";
        img.src = imagetot2[valrand2];
        document.getElementById("texte").innerHTML = "Immergée 1";
        document.getElementById("point2").style.backgroundColor = "black";
    }
    if (n == 2) {
        document.getElementById("ancre").href = "#a3";
        img.src = imagetot3[valrand3];
        document.getElementById("texte").innerHTML = "Immergée 2";
        document.getElementById("point3").style.backgroundColor = "black";
    }
    if (n == 3) {
        document.getElementById("ancre").href = "#a4";
        img.src = imagetot4[valrand4];
        document.getElementById("texte").innerHTML = "Immergée 3";
        document.getElementById("point4").style.backgroundColor = "black";
    }
    if (n == 4) {
        document.getElementById("ancre").href = "#a5";
        img.src = imagetot5[valrand5];
        document.getElementById("texte").innerHTML = "Abysses";
        document.getElementById("point5").style.backgroundColor = "black";
    }
}

function point(nb){
    compteur = nb;
    diaporama(compteur);
}

function arret(){
    clearTimeout(tps);
}