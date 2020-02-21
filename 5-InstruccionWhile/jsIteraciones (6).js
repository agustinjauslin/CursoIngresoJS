function mostrar()
{

	var contador;
	var acumulador;
	var numeroIngresado;


	contador=0;
	acumulador=0;



	while(contador<5)
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
	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN