/*
	Pedir dos números y mostrar el resultado:
	Si son iguales los muestro concatenados.
	Si el primero es mayor, los resto,
	de lo contrario los sumo.
	Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
	"la suma es xxx y supero el 10".
*/
function mostrar()
{


	var numero1;
	var numero2;
	var suma;

	numero1=prompt("ingrese un numero");
	numero2=prompt("ingrese otro numero");


	if (numero1==numero2) 
	{
		
			alert(numero1+numero2);
	}
	else
	{
			if (numero1>numero2) 
			{
					alert(numero1-numero2);
			}
			else
			{		
					numero2=parseInt(numero2);
					numero1=parseInt(numero1);
					suma=numero2+numero1;
					
					if (suma>10) 
					{
						alert("la suma es "+suma+" y supero el 10");
					}
					else
					{
						alert(suma);
					}
			}
	}
//hola
}
