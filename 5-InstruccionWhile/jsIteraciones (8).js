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


	while(respuesta!="detener")
	{
			valorIngresado=prompt("ingresar un numero");
			valorIngresado=parseInt(valorIngresado);
			while(isNaN(valorIngresado))
			{
					valorIngresado=prompt("debes ingresar un numero(no una letra)");
					valorIngresado=parseInt(valorIngresado);	
			}
			if (valorIngresado>0) 
			{
					acumuladorpositivo=acumuladorpositivo+valorIngresado;
			}
			if(valorIngresado<0)
			{
					acumuladornegativo=acumuladornegativo*valorIngresado;
			}

			respuesta=prompt("escribir detener para finalizar el programa");		
	}

document.getElementById('suma').value=acumuladorpositivo;
document.getElementById('producto').value=acumuladornegativo;

}//FIN DE LA FUNCIÓN