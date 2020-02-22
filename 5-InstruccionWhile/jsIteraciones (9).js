function mostrar()
{

	var contador;
	var numeromax;
	var numeromin;
	var valoringresado;
	var respuesta;

	var flag;
	flag=true;




	// declarar variables
	
	respuesta=true;
	contador=0;

	while(respuesta==true)
	{	
		contador++;
		valoringresado=prompt("ingrese un numero");
		valoringresado=parseInt(valoringresado);
				while(isNaN(valoringresado))
				{
					valoringresado=prompt("debes ingresar un numero");
					valoringresado=parseInt(valoringresado);		
				}


								//manera 1

									if(flag==true)//si nunca fue ingresado un valor entonces asigna los valores minimos y maximos
									{
										numeromax=valoringresado;
										numeromin=valoringresado;
									}
									else
									{
											if (valoringresado>numeromax) 
											{
													numeromax=valoringresado;
											}
											else
											{
													if (valoringresado<numeromin) 
													{
															numeromin=numeromin;
													}

											}			

									}	
									flag = false;


									//manera 2
									/*
									if (flag==true || valoringresado>numeromax) 
									{											//al comienzo flag comienza como true asi que
										numeromax=valoringresado 				//asigna el valor ingresado como maximo(si es la primera vez)
																				//luego de ejecutarse(linea 70)sera false e ira a comparar el valor con el numero
																				// y lo reemplazara si se cumple la condicion 2
									
									if (flag==true || valoringresado<numeromin) 
									{
										numeromin=valoringresado;
									}
									flag=false;//se reemplazan los valores la primera vez y luego sera siempre false(e ira a la linea 61)
									*/
		contador++;
		respuesta=confirm("desea ingresar otro numero");


	}


	document.getElementById('maximo').value="el numero maximo es "+numeromax;
	document.getElementById('minimo').value="el numero minimo es "+numeromin;




}//FIN DE LA FUNCIÓN