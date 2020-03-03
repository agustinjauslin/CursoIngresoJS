/* 
	juego de insulto(?
*/
function mostrar()
{
var parte1;
var parte2;


parte1=Math.floor(Math.random() * 19) + 1;
parte2=Math.floor(Math.random() * 19) + 1;
switch(parte1)
{
		case 1:
		parte1="Dique contenedor";
		break;
		case 2:
		parte1="Represa";
		break;
		case 3:
		parte1="Almacen";
		break;
		case 4:
		parte1="Catarata";
		break;
		case 5:
		parte1="Cementerio";
		break;
		case 6:
		parte1="Termotanque";
		break;
		case 7:
		parte1="Container";
		break;
		case 8:
		parte1="Océano";
		break;
		case 9:
		parte1="Bidón";
		break;
		case 10:
		parte1="Silobolsa";
		break;
		case 11:
		parte1="Bombonera";
		break;
		case 12:
		parte1="Genocida";
		break;
		case 13:
		parte1="Agujero negro";
		break;
		case 14:
		parte1="Camion Volquete";
		break;
		case 15:
		parte1="Trasatlantico";
		break;
		case 16:
		parte1="Galaxia";
		break;
		case 17:
		parte1="Coliseo";
		break;
		case 18:
		parte1="Sicario";
		break;
		default:
		parte1="Archipielago";
		break;

}

switch(parte2)
{
		case 1:
		parte2="Achuras";
		break;
		parte2="Chichulines";
		case 2:
		parte2="Grasas Trans";
		break;
		case 3:
		parte2="Mollejas";
		break;
		case 4:
		parte2="Grasas Saturadas";
		break;
		case 5:
		parte2="Harinas";
		break;
		case 6:
		parte2="Pedos Fetidos";
		break;
		case 7:
		parte2="Carbohidratos";
		break;
		case 8:
		parte2="Rabas";
		break;
		case 9:
		parte2="Mondongo";
		break;
		case 10:
		parte2="Morcillas";
		break;
		case 11:
		parte2="Lípidos";
		break;
		case 12:
		parte2="Canelones";
		break;
		case 13:
		parte2="Trigliceridos";
		break;
		case 14:
		parte2="Colesterol";
		break;
		case 15:
		parte2="Chancinados";
		break;
		case 16:
		parte2="Guisos";
		break;
		case 17:
		parte2="Mantecol";
		break;
		default:
		parte2="Ravioles";
		break;

}
alert("Gordo "+parte1+" De "+parte2);

}

