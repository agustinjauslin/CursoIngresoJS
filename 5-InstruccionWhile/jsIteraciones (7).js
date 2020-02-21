function mostrar()
{
	var numeroIngresado;
	var contador=0;
	var acumulador=0;
	var respuesta='si';




	while(respuesta=="si")
	{
		//va a sumar la codicion del while
		contador=contador+1;




		numeroIngresado=prompt("ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);

		while(isNaN(numeroIngresado))//valida si ingresa algo que no sea un numero
		{
		numeroIngresado=prompt("error solo se aceptan numeros");
		numeroIngresado=parseInt(numeroIngresado);
		
		}

		acumulador=acumulador+numeroIngresado;
		respuesta=prompt("ingrese si para continuar");
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN