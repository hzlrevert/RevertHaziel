
//variables

const usuario = "admin";
const clave = "admin";
var usuario_correcto = "0";
var clave_correcta = "0";
var intento = "0";



window.alert("Sig in");

//ingresar usuario

while(usuario_correcto ==0)
{
let user = prompt("ingrese usuario")
if (user == usuario)
{
   usuario_correcto = 1;
   while(clave_correcta !=1)
   {
      let pass = prompt("ingrese clave")
         if (pass==clave )
         {
            clave_correcta = 1;
            window.alert("Bienvenid@ "+user);

         }
         else{
            alert("Clave Incorrecta");
            intento = intento +1;
         if( intento == 3)
               {
            //return;
            
            window.alert("algo");
         }
          
            
         }
   }
}
else{
         alert("Usuario incorrecto");
         
   }



}




 


/*
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


    //funcion de impresion en consola
    alert (FraseCompleta)

    //cantidad de palabras ingresadas
    var cantidadPalabras=0 ;
    for (let i of  FraseCompleta){
      
    }


*/