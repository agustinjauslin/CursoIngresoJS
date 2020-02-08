/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () //C=(F-32).(5/9)
{
	var temperatura;
	var resta;
	var division;
	var resultadoFinal;

	temperatura=document.getElementById('Temperatura').value;
	temperatura = parseInt(temperatura);

	resta=temperatura-32;
	division=5/9;
	resultadoFinal=resta*division;
	alert(resultadoFinal);



	
}

function CentigradosFahrenheit () //F=C.(9/5)+32
{
	var temperatura;
	var division;
	var resultadoFinal;




	temperatura=document.getElementById('Temperatura').value;
	temperatura = parseInt(temperatura);



	division=9/5;
	resultadoFinal=temperatura*division+32;


	alert(resultadoFinal);



	
}
