/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var objetoUno;
	var objetoDos;
	var objetoTres;
	var suma;


	objetoUno=document.getElementById('PrecioUno').value;
	objetoUno=parseInt(objetoUno);



	objetoDos=document.getElementById('PrecioDos').value;
	objetoDos=parseInt(objetoDos);
	


	objetoTres=document.getElementById('PrecioTres').value;
	objetoTres=parseInt(objetoTres);




	suma=objetoUno+objetoDos+objetoTres;

	console.log(suma);
	
}
function Promedio () 
{
	var objetoUno;
	var objetoDos;
	var objetoTres;
	var suma;
	var promedio;


	objetoUno=document.getElementById('PrecioUno').value;
	objetoUno=parseInt(objetoUno);



	objetoDos=document.getElementById('PrecioDos').value;
	objetoDos=parseInt(objetoDos);
	


	objetoTres=document.getElementById('PrecioTres').value;
	objetoTres=parseInt(objetoTres);




	suma=objetoUno+objetoDos+objetoTres;


	promedio=suma/3;

	console.log(promedio);




	
}








function PrecioFinal () 
{
	var objetoUno;
	var objetoDos;
	var objetoTres;
	var suma;
	var iva;


	objetoUno=document.getElementById('PrecioUno').value;
	objetoUno=parseInt(objetoUno);



	objetoDos=document.getElementById('PrecioDos').value;
	objetoDos=parseInt(objetoDos);
	


	objetoTres=document.getElementById('PrecioTres').value;
	objetoTres=parseInt(objetoTres);




	suma=objetoUno+objetoDos+objetoTres;


	iva=suma+suma*0.21;

	console.log(iva);
	
}