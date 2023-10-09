var imgAmarelo = "img/robotron-amarelo.png";
var imgRosa = "img/robotron-rosa.png";
var imgBranco = "img/robotron-branco.png";
var imgPreto = "img/robotron-preto.png";
var imgAzul = "img/robotron-azul.png";
var imgVerme = "img/robotron-vermelho.png"


function myFunction() {
    document.getElementById("myImage").src= imgAzul;
    let cor = imgAzul;
    imgAzul = imgRosa;
    imgRosa = imgVerme;
    imgVerme = imgPreto;
    imgPreto = imgBranco;
    imgPreto = imgAmarelo
    imgAmarelo = cor;
  }

  function voltaCor() {
    let volta = myFunction();
  }

  
    
    
    