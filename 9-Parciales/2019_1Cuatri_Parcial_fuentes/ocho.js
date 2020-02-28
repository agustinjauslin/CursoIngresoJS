/*
Para la gestión de un hotel,
ingresar los siguientes datos validados de una reserva
nombre del huésped
cantidad de personas 
cantidad de dia de estadia 
forma de pago(efectivo , tarjeta o QR)

informar el huésped que trajo más personas en una sola reserva.
la cantidad de personas que se quedaron más días(comparar y ver quien se queda mas dias)
la forma de pago más utilizada.
el promedio de cantidad de días por reserva
*/
function mostrar()
{
var nombre;
var cantidadHuespedes;
var diasEstadia;
var formaPago;
var respuesta;
var cantidadMax;
var nombreCantidadMax;
var contadorEfectivo;
var contadorTarjeta;
var contadorQR;
var contadorReserva;
var sumaReserva;
var flag;

flag=true;
contadorReserva=0;
sumaReserva=0;
contadorQR=0;
contadorTarjeta=0;
contadorEfectivo=0;
respuesta=true;

while(respuesta)
{
	nombre=prompt("ingrese su nombre");
	while(!(isNaN(nombre)))
	{
		nombre=prompt("reingrese su nombre");
	}

	cantidadHuespedes=prompt("ingrese la cantidad de huespedes");
	cantidadHuespedes=parseInt(cantidadHuespedes);
	while(cantidadHuespedes<1)
	{	
			cantidadHuespedes=prompt("reingrese la cantidad de huespedes");
			cantidadHuespedes=parseInt(cantidad);
	}

	diasEstadia=prompt("ingrese la cantidad de dias");
	diasEstadia=parseInt(diasEstadia);
	while(diasEstadia<1)
	{
			diasEstadia=prompt("reingrese la cantidad de dias");
			diasEstadia=parseInt(diasEstadia);
	}
	formaPago=prompt("ingrese la forma de pago");
	while(formaPago!='efectivo'&&formaPago!='tarjeta'&&formaPago!='QR')
	{
			formaPago=prompt("reingrese la forma de pago");	
	}
	
	if (flag==true) 
	{		//informar el huésped que trajo más personas en una sola reserva.
			cantidadMax=cantidadHuespedes;
			nombreCantidadMax=nombre;
			//la cantidad de personas que se quedaron más días(comparar y ver quien se queda mas dias)
			cantidadMaxDias=diasEstadia;
			cantidadHuespedesMaxDias=cantidadHuespedes;
			flag=false;
	}
	else
	{		//informar el huésped que trajo más personas en una sola reserva.
			if (cantidadHuespedes>cantidadMax) 
			{
				cantidadMax=cantidadHuespedes;
				nombreCantidadMax=nombre;	
			}//la cantidad de personas que se quedaron más días(comparar y ver quien se queda mas dias)
			if (diasEstadia>cantidadMaxDias) 
			{
					cantidadMaxDias=diasEstadia;
					cantidadHuespedesMaxDias=cantidadHuespedes;
			}
	}
	//contador de formas de pago
	if (formaPago=='tarjeta') 
	{
		contadorTarjeta++;
	}
	else
	{
			if (formaPago=='efectivo') 
			{
				contadorEfectivo++;
			}
			else
			{
				contadorQR++;
			}
	}
	contadorReserva++;
	sumaReserva=sumaReserva+diasEstadia;
	respuesta=confirm("presione cont para ingresar mas datos")
	

}//salgo del while



	//el promedio de cantidad de días por reserva


	//comparacuon de formas de pago
	if (contadorEfectivo>contadorTarjeta&&contadorEfectivo>contadorQR) 
	{
			formaDePagoMasUtilizada='efectivo'
	}
	else
	{
			if (contadorTarjeta>contadorEfectivo&&contadorTarjeta>contadorQR) 
			{
					formaDePagoMasUtilizada='tarjeta';
			}
			else
			{
					formaDePagoMasUtilizada='QR';
			}
	}
	promedioCantidadDias=sumaReserva/contadorReserva;


/*
informar el huésped que trajo más personas en una sola reserva.
la cantidad de personas que se quedaron más días(comparar y ver quien se queda mas dias)
la forma de pago más utilizada.
el promedio de cantidad de días por reserva
*/

document.write("a. el huesped que trajo mas personas es "+nombreCantidadMax+"<br>");
document.write("b. la cantidad de personas que se quedaron mas dias son "+cantidadMaxDias+"<br>")
document.write("c. la fomrma de pago mas utilizada es "+formaDePagoMasUtilizada+"<br>");
document.write("d.el promedio de cantidad de dias es de "+promedioCantidadDias);


}
