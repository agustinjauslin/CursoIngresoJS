/*
	Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser 
	entre 1 y 100 (validar),la temperatura de almacenamiento(entre -30 y 30) hasta que el 
	usuario quiera e informar al terminar el ingreso por document.write:
	a) La cantidad de temperaturas pares.
	b) La marca del producto más pesado
	c) La cantidad de productos que se conservan a menos de 0 grados.
	d) El promedio del peso de todos los productos.
	f) El peso máximo y el mínimo.
*/
function mostrar()
{
	var marca;
	var peso;
	var temperatura;
	var contadorTempPar;
	var contador;
	contador=0;
	contadorTempPar=0;
	var pesoMaximo;
	var pesoMinimo;
	var contadorBajoCero;
	contadorBajoCero=0;
	var marcaPesada;
	var sumaPeso;
	sumaPeso=0;
	var promedioPeso;


	var respuesta=true;
	while(respuesta==true)
	{
		marca=prompt("ingrese la marca del producto");

		peso=prompt("ingrese el peso");
		peso=parseInt(peso);
		while(!(peso>1&&peso<101))
		{
				peso=prompt("ingrese el peso(recuerde que debe estar entre 1 y 100 kg)");
				peso=parseInt(peso);
		}

		temperatura=prompt("ingrese la temperatura del producto");
		temperatura=parseInt(temperatura);
		while(!(temperatura>-31&&temperatura<31))
		{
				temperatura=prompt("ingrese la temperatura del producto(recuerde que debe estar entre los -30 y 30 grados)");
				temperatura=parseInt(temperatura);	
		}
		//PARES E IMPARES
		if (temperatura%2==0) 
		{
				contadorTempPar++;
		}
		else
		{
				contadorTempImpar++;
		}
		//PESOS MAXIMOS Y MINIMOS
		if (contador==0) 
		{
				pesoMaximo=peso;
				pesoMinimo=peso;
				marcaPesada=marca;
				//este es es si por las dudas el primer producto es bajo cero :3
				if (temperatura<0) 
				{
						contadorBajoCero++;
				}
		}
		else
		{
				if (peso>pesoMaximo) 
				{
					pesoMaximo=peso;
					marcaPesada=marca;
				}
				else
				{
						if (peso<pesoMinimo) 
						{
								pesoMinimo=peso;
						}
				}

				if (temperatura<0) 
				{
						contadorBajoCero++;
				}

		}
		sumaPeso=sumaPeso+peso;


		contador++;
		respuesta=confirm("seleccione ok para contunuar");
	}
	promedioPeso=sumaPeso/contador;

	document.write("a.la cantidad de temperaturas pares son: "+contadorTempPar+"<br>");
	document.write("b.la marca del producto mas pesado es "+marcaPesada+"<br>");
	document.write("c.la cantidad de productos con temperatura menor a 0 grados es: "+contadorBajoCero+"<br>");
	document.write("d. el promedio del peso de todos los productos es :"+promedioPeso+"<br>");
	document.write("f.el peso minimo es :"+pesoMinimo+" y el peso maximo es :"+pesoMaximo+"<br>");

}
