/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var resultado;
	var formulaParaDescuento;
	var resultado;


	//tomo los datos que se envian por el id
	importe=document.getElementById('importe').value;
	importe=parseInt(importe);

	descuento=10;//le doy un valor al porcentaje(el enunciado dice 10%)






	formulaParaDescuento=descuento/100;//si pongo 0,10 solamente me sirve para calcular el 10% pero si lo hago de esta manera sirve para calcular cualquier porcentaje
	formulaParaResultado=importe*formulaParaDescuento;//valor ingresado*porcentaje(saco el aumento)
	resultado=importe-formulaParaResultado;//al importe se le descuenta el porcentaje sacado anteriormente

	console.log(resultado);

	
}
