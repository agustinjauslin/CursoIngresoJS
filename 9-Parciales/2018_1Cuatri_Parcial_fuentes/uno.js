/*
		Realizar el algoritmo que  pida el ancho y el largo de un rectángulo  
		por prompt y que muestre el perímetro por alert.

*/
function mostrar()//2*(A+B)
{
	var ancho;
	var largo;
	var suma;
	var formulaDePerimetroDeRectangulo;


	ancho=prompt("ingrese el ancho del rectángulo");
	ancho=parseInt(ancho);




	largo=prompt("ingrese el largo del rectangulo");
	largo=parseInt(largo);

	suma=ancho+largo;


	formulaDePerimetroDeRectangulo=2*suma;


	alert("el perimetro es "+formulaDePerimetroDeRectangulo);





}
