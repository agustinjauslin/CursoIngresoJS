function mostrar()
{
	/*
			Al ingresar una edad debemos informar 
			si la persona es mayor de edad, sino 
			informar que es un menor de edad.


	*/
//tomo la edad  
var edad;
edad=document.getElementById('edad').value;
edad=parseInt(edad);
/*
//metodo 1 que usa 2 veces el procesador
if (edad>17) 
{
	alert("es mayor de edad")
}
if (edad<18) 
{
	alert("es menor de edad");

}*/
//metodo 2

if (edad>17) 
{
	alert("es mayor de edad")
}
else
{
	alert("es menor de edad")
}
}//FIN DE LA FUNCIÓN


//kldjsalkjdskajdsakldjslakdjsalkdjsalk