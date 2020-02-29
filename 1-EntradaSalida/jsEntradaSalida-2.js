/*
		
c)Se pide la carga de datos de un contenedor  de alimento canino con un máximo de carga 
de 1000kg, cargar hasta que el cliente quiera o se llene el contenedor.
se pide:



marca
kilos por bolsa
cantidad de bolsa
importe por bolsa

que marca tiene más kilos en el contenedor
que marca tiene más bolsas de alimento en el contenedor
que marca tiene el mayor importe por bolsa de alimento
el importe y la marca de la bolsa de alimento menos pesada.
*/
function mostrar()
{
	var marca;
	var kilosBolsa;
	var cantidadBolsa;
	var importeBolsa;
	var maximoKG;
	maximoKG=0;
	var respuesta;
	var flag;
	var kilosMarca;
	var maxKilosMarca;
	var marcaMaxKilos;
	var maxBolsas;
	var marcaMaxBolsas;
	var mayorImporte;
	var marcaMayorImporte;
	var minKilosPorbolsa;
	var importeMinKilosPorBolsa;
	var marcaMinKilosPorBolsa;



	respuesta=true;
	flag=true;


	while(respuesta==true||maximoKG<1001)
	{

		marca=prompt("ingrese marca");
		kilosBolsa=prompt("ingrese los kilos de la bolsa");
		kilosBolsa=parseInt(kilosBolsa);
		while(kilosBolsa<1||isNaN(kilosBolsa))
		{
				kilosBolsa=prompt("ingrese los kilos de la bolsa");
				kilosBolsa=parseInt(kilosBolsa);
		}

		cantidadBolsa=prompt("ingrese la cantidad de bolsas");
		cantidadBolsa=parseInt(cantidadBolsa);
		while(cantidadBolsa<1||isNaN(cantidadBolsa))
		{
				cantidadBolsa=prompt("ingrese la cantidad de bolsas");
				cantidadBolsa=parseInt(cantidadBolsa);	
		}

		importeBolsa=prompt("ingrese el importe de la bolsa");
		importeBolsa=parseInt(importeBolsa);
		while(importeBolsa<1||isNaN(importeBolsa)||isNaN(importeBolsa))
		{
				importeBolsa=prompt("ingrese el importe de la bolsa");
				importeBolsa=parseInt(importeBolsa);
		}


		//CUENTAS PARA VER CUANTOS KILOS TIENE LA BOLSA INGRESADA
		kilosMarca=cantidadBolsa*kilosBolsa;
		if (flag) 
		{		//A
				maxKilosMarca=kilosBolsa;
				marcaMaxKilos=marca;
				//B
				maxBolsas=cantidadBolsa;
				marcaMaxBolsas=marca;
				//C c.que marca tiene el mayor importe por bolsa de alimento
				mayorImporte=importeBolsa;
				marcaMayorImporte=marca;
				//D el importe y la marca de la bolsa de alimento menos pesada.
				minKilosPorbolsa=kilosBolsa;
				importeMinKilosPorBolsa=importeBolsa;
				marcaMinKilosPorBolsa=marca;
				flag=false;
		}
		else
		{		//A
				if (kilosMarca>maxKilosMarca) 
				{
						maxKilosMarca=kilosBolsa;
						marcaMaxKilos=marca;
				}
				//B
				if (cantidadBolsa>maxBolsas) 
				{
						maxBolsas=cantidadBolsa;
						marcaMaxBolsas=marca;	
				}

				//C
				if (importe>mayorImporte) 
				{
						mayorImporte=importeBolsa;
						marcaMayorImporte=marca;
				}
				if (kilosBolsa<minKilosPorbolsa) 
				{
						minKilosPorbolsa=kilosBolsa;
						importeMinKilosPorBolsa=importeBolsa;
						marcaMinKilosPorBolsa=marca;		
				}
		}
		

		/*
			a.que marca tiene más kilos en el contenedor
			a.establecer la marca con mas kilos en el contenedor con la 
			multiplicacion entre cantidad de bolsas con kilos

			b.que marca tiene más bolsas de alimento en el contenedor

			c.que marca tiene el mayor importe por bolsa de alimento

			el importe y la marca de la bolsa de alimento menos pesada.
		*/

		maximoKG=maximoKG+(cantidadBolsa*kilosBolsa);
		respuesta=confirm("desea seguir ingresando datos?");
	}//SALGO WHILE

	document.write("La marca con mas kilos es "+marcaMaxKilos+"<br>");
	document.write("la marca con mas bolsas es "+marcaMaxBolsas+"<br>");
	document.write("marca que tiene el mayor importe por bolsa de alimento : "+marcaMayorImporte+"<br>");
	document.write("el importe y la marca de la bolsa de alimento menos pesada son : "+importeMinKilosPorBolsa+" "+marcaMinKilosPorBolsa);

}

