/*
	Bienvenidos (SWITCH +IF).
	Se ingresa una hora.
	Si está entre las 6 y las 11 mostrar:"es de mañana",
	si es desde las 12 a las 19: "es de tarde",
	de lo contrario informar que es de noche.
	Informar si la hora no es válida.
	Si es de noche y la hora es menor a 24 mostrar se debe agregar el mensaje : "a dormir".
*/
function mostrar()
{
	var hora;

	hora=document.getElementById('laHora').value;
	hora=parseInt(hora);



	switch(hora)
	{
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
			alert("es de noche");
			break;

		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("es de mañana");
			break;

		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			alert("es de tarde");
			break;

		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			alert("es de noche");
			if (hora<24) 
			{
					alert("y tenes que ir a mimir");
			}
			break;

		default:
		alert("debe ingresar un valor entre 0 a 23");
		break;	
	}




/*
	if (hora>5 && hora<12) 
	{
			alert("es de mañana");
	}
	else
	{
			if (hora>11 && hora<20) 
			{
					alert("es de tarde");
			}
			else
			{
					if ((hora>19&&hora<25)||(hora>-1&&hora<6)) 
					{
							alert("es de noche");
					}
					else
					{
							alert("ingrese una hora entre las 0 y las 23");
					}
			}
	}*/
}

