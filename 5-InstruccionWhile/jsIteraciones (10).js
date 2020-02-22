function mostrar()
{
	var valorIngresado;//tomo con prompt


	var positivo;//acumulador de numeros positivos
	positivo=0;

	var negativo;
	negativo=0;



	var contadorPositivo;//contador de numeros positivos
	contadorPositivo=0;

	var contadorNegativo;
	contadorNegativo=0;

	var contadorCero;
	contadorCero=0;


	var contadorPares;
	contadorPares=0;
	//declarar contadores y variables 
	
	var respuesta=true;

	var promedioPositivo;
	var promedioNegativo;
	var diferencia;

	while(respuesta==true)
	{
			valorIngresado=prompt("ingrese un numero")//pido el numero
			valorIngresado=parseInt(valorIngresado);
					while(isNaN(valorIngresado))//verifico si el valor es un numero
					{
							valorIngresado=prompt("debe ingrese un numero no una letra")
							valorIngresado=parseInt(valorIngresado);		
					}
			if (valorIngresado>0)//suma de numeros mayores y conteo de estos mismos
			{
					if ((valorIngresado%2)==0) //si el valor ingresado es multiplo de 2(par)
					{
							contadorPares++;//si la condicion es verdadera entonces incrementa el contador par
					}
					positivo=positivo+valorIngresado;//se asigna el valor(si es mayor que 0) de la suma entre positivo(0 si es la primera vez) + el valor ingresado para actualizar el dato
					contadorPositivo++;//si la condicion verdadera se aumenta la cantidad de numeros positivos ingresados
			}
			else
			{
					if (valorIngresado<0) 
					{
							negativo=negativo+valorIngresado;
							contadorNegativo++;
					}
					else
					{
						contadorCero++;// si no es mayor a 0 o menor a cero es 0, y el contador de 0 aumenta en 1(por cada 0 ingresado)
					}

			}
	
			



			
			respuesta=confirm("presione aceptar para ingresar otro numero");

	
	}

	promedioPositivo=positivo/contadorPositivo;
	promedioNegativo=negativo/contadorNegativo;
	diferencia=positivo+negativo;

	document.write("1.la suma de los numeros negativos es : "+negativo+"<br>");
	document.write("2.la suma de los numeros positivos es : "+positivo+"<br>");
	document.write("3.la cantidad de los numeros positivos es : "+contadorPositivo+"<br>");
	document.write("4.la cantidad de los numeros negativos es : "+contadorNegativo+"<br>");
	document.write("5.la cantidad de ceros es : "+contadorCero+"<br>");
	document.write("6.la cantidad de los numeros pares es : "+contadorPares+"<br>");
	document.write("7.el promedio de los numeros positivos es:"+promedioPositivo+"<br>");
	document.write("8.el promedio de los numeros negativos es:"+promedioNegativo+"<br>");
	document.write("9.la diferencia entre los positivos y negativos es:"+diferencia+"<br>");


}//FIN DE LA FUNCIÓN