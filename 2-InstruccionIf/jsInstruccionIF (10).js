function mostrar()
{

	/*


	Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
	"EXCELENTE" para notas igual a 9 o 10,
	"APROBÓ" para notas mayores a 4,
	"Vamos, la proxima se puede" para notas menores a 4


	*/


	//Genero el número RANDOM entre 1 y 10 
	var numeroAleatorio;



	numeroAleatorio=Math.floor((Math.random() * 10)+1);
	console.log(numeroAleatorio);

/*
	//METODO 1

	if ((numeroAleatorio<10)&&(numeroAleatorio>8)) 
	{
		alert("EXCELENTE");
	}
	else{
			if ((numeroAleatorio>0)&&(numeroAleatorio<4)){
				alert("Vamos, la proxima se puede");
			}
			else{
				if ((numeroAleatorio>3)&&(numeroAleatorio<9)) 
				{
					alert("APROBÓ");
				}else{
							alert("debe ingresar notas de 0 a 10");
					 }
				}
		}


//METODO 2

	if ((numeroAleatorio<11)&&(numeroAleatorio>8)){
		alert("EXCELENTE");		
	}
	else{
		if ((numeroAleatorio>0)&&(numeroAleatorio<4)) {
			alert("Vamos, la proxima se puede");
		}else
		{
			alert("APROBÓ");
		}

	}

}
*/
//METODO 3
if (numeroAleatorio>8) {
	alert("EXCELENTE");

}
else{
	if (numeroAleatorio<4) {
		alert("Vamos, la proxima se puede");
	}
	else{
		alert("APROBÓ");
	}
}


}


//FIN DE LA FUNCIÓN