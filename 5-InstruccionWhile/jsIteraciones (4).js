function mostrar()
{

	var numero;
	numero = prompt("ingrese un número entre 0 y 10.");
	numero= parseInt(numero);
	while(isNaN(numero))//valida si ingresa algo que no sea un numero
		{
		numero=prompt("solo se aceptan numeros");
		
		
		}




	while(!(numero<10&&numero>-1))
	{
			numero = prompt("debe ingresar un número entre 0 y 10.");
			

	}
	document.getElementById('Numero').value=numero;


}//FIN DE LA FUNCIÓN