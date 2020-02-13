function mostrar()
{
	/*

		Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".


	*/
//tomo la edad  

var edad;

edad=document.getElementById('edad').value;
edad=parseInt(edad);

if (edad==15) {//el == resta y si el resultado es 0(suponiendo que edad es 15) da 0 y la pc lo toma como 1(true)
	alert("niña bonita");
}


//==igualdad
// != no igual


}//FIN DE LA FUNCIÓN