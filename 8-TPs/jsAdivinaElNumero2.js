/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	contadorIntentos=0;
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto=Math.floor((Math.random() * 100) + 1);
	console.log(numeroSecreto);
}
function verificar()
{	
	var numeroIngresado;
	numeroIngresado=document.getElementById('numero').value;
	numeroIngresado=parseInt(numeroIngresado);
	//CONDICIONES
	if (numeroIngresado==numeroSecreto) 
	{
			if (contadorIntentos==1) 
	{
			alert("usted es un Psíquico");
	}
	else
	{
			if (contadorIntentos==2) 
			{
					alert("Excelente percepción");
			}
			else
			{
					if (contadorIntentos==3) 
					{
							alert("Esto es suerte");
					}
					else
					{
							if (contadorIntentos==4) 
							{
									alert("excelente técnica");
							}
							else
							{
									if (contadorIntentos==5) 
									{
											alert("usted está en la media");
									}
									else
									{
											if (contadorIntentos>5&&contadorIntentos<11)
											{
													alert("falta técnica");
											}
											else
											{
													alert("afortunado en el amor");
											}	
									}
							}
					}
			}	
	}
			
	}
	else
	{

				contadorIntentos++;
				console.log(contadorIntentos);
				if (numeroIngresado>numeroSecreto) 
				{	
						alert("te pasaste");
				}
				else
				{
						alert("te falto");
				}				
	}
}	