/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombre = prompt("Please enter your name", "Harry Potter");//prompt regresa algo, debe tener necesariamente el igual para tomar un valor y lo guarda en la variable
	console.log("tu nombre es "+nombre);//console log es un echo que te muestras los resultados en la CONSOLA
										//para concatenar en js se utiliza en +
}

