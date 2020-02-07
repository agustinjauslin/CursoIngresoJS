/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/


function mostrar()
{	
	var nombre; 
	nombre= document.getElementById('elNombre').value;//punto value te da el valor del cuadro de texto
	alert(nombre);
	document.getElementById('elNombre').value="agustin";//asisçgna la variable agustin al id

}


