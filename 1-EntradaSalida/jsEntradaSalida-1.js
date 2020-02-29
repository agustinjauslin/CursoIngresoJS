/*
		
b)Para la gestión de un hotel,
ingresar los siguientes datos validados de una reserva
nombre del huésped
cantidad de personas 
cantidad de dia de estadia 
forma de pago(efectivo , tarjeta o QR)

informar el huésped que trajo más personas en una sola reserva.
la cantidad de personas que se quedaron más días
la forma de pago más utilizada.
el promedio de cantidad de días por reserva
*/
function mostrar()
{
var nombre;
var	cantidadPersonas;
var	cantidadDias;
var	formaPago;
var respuesta;
var maxCantidadPersonas;
var maxCantidadDias;
var maxCantidadPersonasNombre;
var maxCantidadDiasPersonas;
var contadorTarjeta;
var contadorEfectivo;
var contadorQR;
var contadorReserva;
contadorReserva=0;
var	sumaDiasReserva;
sumaDiasReserva=0;
var promedioDias;

var flag;
flag=true;

contadorQR=0;
contadorEfectivo=0;
contadorTarjeta=0;

respuesta=true;



		while(respuesta==true)
		{
				nombre=prompt("ingrese su nombre");
				while(!(isNaN(nombre)))
				{
						nombre=prompt("ingrese su nombre");
				}

				cantidadPersonas=prompt("ingrse la cantidad de personas");
				cantidadPersonas=parseInt(cantidadPersonas);
				while(cantidadPersonas<1)
				{
						cantidadPersonas=prompt("ingrse la cantidad de personas");
						cantidadPersonas=parseInt(cantidadPersonas);	
				}


				cantidadDias=prompt("ingrese la cantidad de dias");
				cantidadDias=parseInt(cantidadDias);
				while(cantidadDias<1)
				{
						cantidadDias=prompt("ingrese la cantidad de dias");
						cantidadDias=parseInt(cantidadDias);	
				}
				formaPago=prompt("ingrese la forma de pago");
				while(formaPago!='tarjeta'&&formaPago!='efectivo'&&formaPago!='QR')
				{
						formaPago=prompt("ingrese la forma de pago");
				}


				//informar el huésped que trajo más personas en una sola reserva.

				if (flag) 
				{
						maxCantidadPersonas=cantidadPersonas;
						maxCantidadPersonasNombre=nombre;

						maxCantidadDias=cantidadDias;
						maxCantidadDiasPersonas=cantidadPersonas;

						flag=false;
				}
				else
				{
						if (cantidadPersonas>maxCantidadPersonas) 
						{
								maxCantidadPersonas=cantidadPersonas;
								maxCantidadPersonasNombre=nombre;
						}
						//la cantidad de personas que se quedaron más días
						if (cantidadPersonas>maxCantidadDias) 
						{
								maxCantidadDias=cantidadDias;
								maxCantidadDiasPersonas=cantidadPersonas;	
						}
				}
				if (formaPago=='efectivo') 
				{
						contadorEfectivo++;
				}
				else
				{
						if (formaPago=='tarjeta') 
						{
								contadorTarjeta++;
						}
						else
						{
								contadorQR++;
						}
				}



				contadorReserva++;
				sumaDiasReserva=sumaDiasReserva+cantidadDias;
				respuesta=confirm("desea continuar ingresando datos?");



			}//salgo del while
			if (contadorTarjeta>contadorQR&&contadorTarjeta>contadorEfectivo) 
			{
					mejorFormaPago='tarjeta';
			}
			else
			{
					if (contadorEfectivo>contadorQR) 
					{
							mejorFormaPago='efectivo';
					}
					else
					{
							mejorFormaPago='QR';
					}
			}
			
			if (contadorQR>contadorEfectivo&&contadorQR>contadorTarjeta) 
			{
					mejorFormaPago='QR'
			}
			promedioDias=sumaDiasReserva/contadorReserva;
document.write("el huésped que trajo más personas en una sola reserva."+maxCantidadPersonasNombre+"<br>")
document.write("la cantidad de personas que se quedaron más días"+maxCantidadDiasPersonas+"<br>");
document.write("la forma de pago más utilizada."+mejorFormaPago+"<br>");
document.write("el promedio de cantidad de días por reserva"+promedioDias);
}




