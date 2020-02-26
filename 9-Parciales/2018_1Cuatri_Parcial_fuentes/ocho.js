/*
		Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número 
		entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar 
		el ingreso por document.write:
		a) La cantidad de números pares.(ok)
		b) La cantidad de números impares.(ok)
		c) La cantidad de ceros.(ok)
		d) El promedio de todos los números positivos ingresados.
		e) La suma de todos los números negativos.
		f) El número y la letra del máximo y el mínimo.
*/
function mostrar()
{
//VARIABLES
var letra;
var numero;
var contadorPar;
contadorPar=0;
var contadorImpar;
contadorImpar=0;
var contadorCero;
contadorCero=0;
var promedioPositivo;
var sumaPositivo;
sumaPositivo=0;
var sumaNegativa;
sumaNegativa=0;
var contadorPositivo;
contadorPositivo=0;
var maximo;
var letraMaximo;
var letraMinimo;
var minimo;
var contador;
contador=0;
var respuesta;
//VALORES
respuesta=true;
while(respuesta==true)//contador=0
{	
		
		numero=prompt("ingrese un numero entre -100 y 100");
		numero=parseInt(numero);
		while(!(numero>-101&&numero<101))
		{
				numero=prompt("ingrese un numero entre -100 y 100(2)");
				numero=parseInt(numero);	
		}

		letra=prompt("ingrese una letra");
		while(!(isNaN(letra)))
		{
				letra=prompt("ingrese una letra master");
		}

		if (numero%2==0) 
		{
			contadorPar++;	
		}
		else
		{
					contadorImpar++;
		}




		if (numero>0) 
		{
				contadorPositivo++;
				sumaPositivo=sumaPositivo+numero;
		}
		else
		{
				if (numero<0) 
				{
						sumaNegativa=sumaNegativa+numero;
				}
				else
				{
					contadorCero++;
				}
		}


		if (contador==0) 
		{	
				maximo=numero;
				minimo=numero;
				letraMaximo=letra;
				letraMinimo=letra;		
		}
		else
		{
				if (numero<minimo) 
				{
					minimo=numero;
					letraMinimo=letra;
				}
				else
				{
						if (numero>maximo) 
						{
								maximo=numero;
								letraMaximo=letra;
						}
				}
				
		}


		contador++;
		respuesta=confirm("desea continuar?");
}
promedioPositivo=sumaPositivo/contadorPositivo;
document.write("a.la cantidad de numeros pares son: "+contadorPar+"<br>");
document.write("b.la cantidad de numeros impares son :"+contadorImpar+"<br>");
document.write("c.la cantidad de ceros son :"+contadorCero+"<br>");
document.write("d.el promedio de los numeros positivos son: "+promedioPositivo+"<br>");
document.write("e.la suma de todos los negativos es: "+sumaNegativa+"<br>");
document.write("f.el valor minimo es "+minimo+" y su letra es "+letraMinimo+"<br>"+"el valor maximo es "+maximo+" y su letra es "+letraMaximo);
}
