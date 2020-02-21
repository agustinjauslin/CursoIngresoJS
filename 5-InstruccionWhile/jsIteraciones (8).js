function mostrar()
{
//VARIABLES
	var contador;

	var respuesta;
	var valorIngresado;
	var acumuladorpositivo;
	var acumuladornegativo;

//VALORES

	contador=0;

	respuesta='si';
	acumuladorpositivo=0;
	acumuladornegativo=1;




	while(respuesta=="si")
	{

		valorIngresado=prompt("ingrese un valor");
		valorIngresado=parseInt(valorIngresado);




		if (valorIngresado>0) 
		{
			acumuladorpositivo=acumuladorpositivo+valorIngresado;
	
		}
		else
		{
			acumuladornegativo=acumuladornegativo*valorIngresado;

		}
		//reformula la condicion para continuar(si usuario escribe "si")
		respuesta=prompt("ingrese si para continuar");
	}

document.getElementById('suma').value=acumuladorpositivo;
document.getElementById('producto').value=acumuladornegativo;

}//FIN DE LA FUNCIÓN