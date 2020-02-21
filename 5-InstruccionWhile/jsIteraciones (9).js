function mostrar()
{

	var contador;
	var numeromax;
	var numeromin;
	var valoringresado;
	var respuesta;




	// declarar variables
	
	respuesta='si';
	contador=0;

	while(respuesta!='no')
	{
				valoringresado=prompt("ingrese un valor"); 
				valoringresado=parseInt(valoringresado);
				while(isNaN(valoringresado))
				{
						valoringresado=prompt("ingrese un valor numerico por favor"); 
						valoringresado=parseInt(valoringresado);	
				}
				contador=contador+1;

				if (contador==1) 
				{
					numeromax=valoringresado;
					numeromin=valoringresado;
				}
				if (valoringresado>numeromax) 
				{
					numeromax=valoringresado;
				}
				if (valoringresado<numeromin) 
				{
					numeromin=valoringresado
				}
				respuesta=prompt("'no'para detener el programa // cualquier otro valor para continuar");
	}

	document.getElementById('maximo').value="el numero maximo es"+numeromax;
	document.getElementById('minimo').value="el numero minimo es"+numeromin;




}//FIN DE LA FUNCIÓN