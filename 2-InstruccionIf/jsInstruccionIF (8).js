function mostrar()
{
/*

	Al ingresar una edad menor a 18 años y un estado 
	civil distinto a "Soltero", NO HACER NADA,
	pero si no es asi, y es soltero y no es menor, mostrar 
	ºel siguiente mensaje: 'Es soltero y no es menor.'

*/
//tomo la edad  
var edad;
var estadoCivil;




edad=document.getElementById('edad').value;
edad=parseInt(edad);


estadoCivil=document.getElementById('estadoCivil').value;



if ((edad>17)&&(estadoCivil=="Soltero")) 
{
	alert("es soltero y no es menor")
}
else{
	//nada
}
	


}//FIN DE LA FUNCIÓN