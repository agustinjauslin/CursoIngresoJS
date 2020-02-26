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
