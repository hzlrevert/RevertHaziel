
window.alert("armar una frase sin sentido");
var palabra = prompt ("ingresar palabras, para salir ingresar .");
var frase = palabra;
var FraseCompleta = "";


//logica

while(palabra != '.')
    {

       FraseCompleta = FraseCompleta +" " + frase;
       console.log(FraseCompleta);
       frase = palabra = prompt ("ingresar palabras");
       

    }