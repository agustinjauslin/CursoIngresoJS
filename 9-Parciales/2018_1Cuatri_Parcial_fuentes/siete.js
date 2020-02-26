function mostrar()
{
	var nota;
	var sexo;
	var contador;
	var valorMinimo;
	var sexoMinimo;
	var suma;
	var varonesMaximos;
	varonesMaximos=0;
	suma=0;

	contador=0;

 	
	while(contador<5)
	{


		nota=prompt("ingrese la nota del alumno");
		nota=parseInt(nota);
		while(!(nota>-1&&nota<11))
		{
				nota=prompt("ingrese la nota del alumno(entre 0 y 10)");
				nota=parseInt(nota);	
		}
		sexo=prompt("ingrese su sexo");
		while(!(sexo=='m'||sexo=='f'))
		{
				sexo=prompt("ingrese su sexo(m ó f)");	
		}

		if (contador==0) 
		{
				valorMinimo=nota;
				sexoMinimo=sexo;
		}
		else
		{
				if (nota<valorMinimo) 
				{
						valorMinimo=nota;
						sexoMinimo=sexo;
				}
		}



		if (nota>5&&sexo=='m') 
		{
				varonesMaximos++;
		}

		suma=suma+nota;


		contador++;


	}
	promedio=suma/contador;
	alert("a.el promedio de todos es "+promedio);
	alert("b.el la nota mas baja es "+valorMinimo+" Y el sexo de esa persona es "+sexoMinimo);
	alert("c. La cantidad de varones que su nota haya sido mayor o igual a 6 son: "+varonesMaximos)
}


/*
function mostrar()
{
	//VARIABLES
	var nota1;
	var nota2;
	var nota3;
	var sexo;
	var suma;
	var supersuma;
	supersuma=0;
	var contador;
	contador=0;
	var valorMinimo;
	valorMinimo=20;
	var sexominimo;
	var promedio;
	var promediototal;
	promediototal=0;
	var contadorvarones;
	contadorvarones=0;
	var promediovarones;
	//VARIABLES Y WHILE
	while(contador<5)
	{
						nota1=prompt("ingrese nota 1");
						nota1=parseInt(nota1);
						while(!(nota1>-1 && nota1<11))
						{
							nota1=prompt("debe ingresar una nota entre 0 y 10");
							nota1=parseInt(nota1);		
						}
						nota2=prompt("ingrese nota 2");+
						nota2=parseInt(nota2);
						while(!(nota2>-1 && nota2<11))
						{
								nota2=prompt("debe ingresar una nota entre 0 y 10");
								nota2=parseInt(nota2);
						}
						nota3=prompt("ingrese nota 3");
						nota3=parseInt(nota3);
						while(!(nota3>-1&&nota3<11))
						{
							nota3=prompt("debe ingresar una nota entre 0 y 10");
							nota3=parseInt(nota3);
						}
						sexo=prompt("ingrese el sexo del alumno");
						while(!(sexo=='m'||sexo=='f'))
						{
							sexo=prompt("ingrese un sexo valido(con la letra m para masculino o la letra f para femenino)");
						}
						suma=nota1+nota2+nota3;







						// 3    1    0

													//   n1  n2   n3
						//minimo PRIMERA VEZ    6   5    4   
						if (contador==0) 
						{
							if (nota1<nota2&&nota1<nota3) 
							{
									valorMinimo=nota1;
									sexominimo=sexo;

							}
							else
							{
									if (nota2<nota1&&nota2<nota3) 
									{
											valorMinimo=nota2;
											sexominimo=sexo;	
									}
									else
									{
											if (nota3<nota2&&nota3<nota1) 
											{		
													valorMinimo=nota3;
													sexominimo=sexo;
											}
									}	
							}				
						}
						else
						{
							//valor minimo 4//20??????

													 	 n1  n2   n3
						//maximo y minimo PRIMERA VEZ    9    8    7     
								if (nota1<valorMinimo&&nota1<nota2&&nota1<nota3) 
								{
										valorMinimo=nota1;
										sexominimo=sexo;
								}
								else
								{
										if (nota2<valorMinimo&&nota2<nota1&&nota2<nota3) 
										{
												valorMinimo=nota2;
												sexominimo=sexo;
										}
										else
										{
												if (nota3<valorMinimo&&nota3<nota1&&nota3<nota2) 
												{
														valorMinimo=nota3;
														sexominimo=sexo;
												}
												else
												{
														valorMinimo=valorMinimo;
														
												}	
										}
								}

								
									
						}
						//tomo el valor minimo y luego lo comparo con el proximo alumno	
						promediovarones=suma/3;
						promediovarones=parseInt(promediovarones);
						if (promediovarones>5 && sexo=='m') 
						{
							contadorvarones++;
						}
						promedio=suma/3;//promedio alumno1
						promediototal=promediototal+promedio;
						contador++;
	}
	promediototal=promediototal/contador
	alert("a.el promedio de todos los alumnos es de :"+promediototal);
	alert("b.el valor minimo es "+valorMinimo+" y el sexo de esa persona es "+sexominimo);
	alert("c.los HOMBRES MACHOS SUPERIORES son: "+contadorvarones);
	}
*/
