/*

	Enunciado:
	Bienvenidos. 
	Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.



*/
function mostrar()//precio-precio*(descuento/100)//FORMULA DE DESCUENTO
{	
	//VARIABLES

	var precio;//precio que ingreso con prompt
	var porcentaje;//porcentaje de descuento con prompt
	var descuento;//obtengo el valor para obtener el valor decimal para luego multiplicarlo(y sacar 10% por ejemplo)
	var formulaDescuento;//obtener el valor con coma(10% del precio por ejemplo) que posteriormente se utilizara para restar el porcentaje del precio ingresado
	var precioFinal;//resta al precio, el porcentaje que sacamos en el punto anterior 

	//TOMAR DATOS EN VARIABLES
	precio=prompt("ingrese el precio");
	porcentaje=prompt("ingrese el descuento");


	//FORMULAS
	descuento=porcentaje/100;
	formulaDescuento=precio*descuento;


	preciofinal=precio-formulaDescuento;
	
	//FINAL(SALIDAS)
	console.log(preciofinal);
	document.getElementById('elPrecioFinal').value=preciofinal;







}
