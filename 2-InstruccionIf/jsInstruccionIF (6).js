function mostrar()
{
	/*

		Al ingresar una edad debemos informar si la persona es mayor de edad 
		(mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).


	*/
//tomo la edad  
var edad;
edad=document.getElementById('edad').value;
edad=parseInt(edad);


if (edad<13) 
{
	alert("es niño");
}
else
{
	if (edad>17) 
	{
		alert("es un adulto");
	}
	else
	{
		alert("es un adolescente")
	}
}




}//FIN DE LA FUNCIÓN