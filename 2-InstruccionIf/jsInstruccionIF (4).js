function mostrar()
{
//tomo la edad
/*
	Al ingresar una edad 
	debemos informar si la persona es adolescente, 
	edad entre 13 y 17 años (inclusive) .

*/  
var edad;
edad=document.getElementById('edad').value;
edad=parseInt(edad);

//manera con 2 if
/*
if (edad>12) {
	if (edad<18) 
	{
		alert("usted es adolescente")
	}



}
*/

//solucion con and
if ((edad>12)&&(edad<18)) 
{
	alert("usted es adolescente")
}



}//FIN DE LA FUNCIÓN