/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{	

	//creo las variables que voy a utilizar
	var sueldo;
	var porcentaje;
	var resultado;

	//tomo los datos que se envian por el id
	sueldo=document.getElementById('sueldo').value;
	sueldo=parseInt(sueldo);

	porcentaje=10;//le doy un valor al porcentaje(el enunciado dice 10%)






	importe=porcentaje/100;//si pongo 0,10 solamente me sirve para calcular el 10% pero si lo hago de esta manera sirve para calcular cualquier porcentaje
	aumento=sueldo*importe;//valor ingresado*porcentaje(saco el aumento)
	resultado=sueldo+aumento;

	console.log(resultado);



	
}
