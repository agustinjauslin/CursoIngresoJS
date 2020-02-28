/*
a.de la temp mas alta el nombre y el sexo
b. si tiene mas de 38 de temperatura y es un niño(<12) o mayor de edad(>60)mensaje "riesgo" con nombre
c.temperatura del mas joven/del mas viejo
d.promedio de edad/total y por mujeres
*/

function mostrar()
{
	var nombre;
	var nombreMaxTemp;
	var edad;
	var sexo;
	var sexoMaxTemp;
	var temperatura;
	var temperaturaJoven;
	var temperaturaViejo;
	
	var tempMax;
	var respuesta;
	var contador;
	contador=0;
	var promedio;
	var suma;
	suma=0;
	var flag;
	flag=true;
	respuesta=true;
	var promedioMujeres;
	var sumaMujeres;
	
	var contadorMujeres;
	contadorMujeres=0;
	temperaturaViejo=0;
	temperaturaJoven=0;
	sumaMujeres=0;
	//	promedioMujeres=sumaMujeres/contadorMujeres


	while(respuesta==true)
	{
			nombre=prompt("ingrese su nombre");
			while(!(isNaN(nombre)))
			{
					nombre=prompt("ingrese su nombre");
			}


			sexo=prompt("ingrese su sexo");
			while(sexo!='m'&&sexo!='f')
			{
					sexo=prompt("reingrese su sexo");
			}


			edad=prompt("ingrese su edad");
			edad=parseInt(edad);
			while(edad<1||edad>100)
			{
					edad=prompt("reingrese su edad");
					edad=parseInt(edad);
			}


			temperatura=prompt("ingrese su temperatura corporal");
			temperatura=parseInt(temperatura);
			while(temperatura<34||temperatura>42)
			{
					temperatura=prompt("ingrese su temperatura corporal");
					temperatura=parseInt(temperatura);
			}


			if(flag)
			{
				tempMax=temperatura;
				nombreMaxTemp=nombre;
				sexoMaxTemp=sexo;


				temperaturaJoven=temperatura;
				temperaturaViejo=temperatura;

				
				edadJoven=edad;
				edadViejo=edad;
				flag=false;

			}
			else
			{
					if (temperatura>tempMax) 
					{
							tempMax=temperatura;
							nombreMaxTemp=nombre;
							sexoMaxTemp=sexo;

					}
					if (edad<edadJoven) 
					{
							temperaturaJoven=temperatura;

					}
					if(edad>edadViejo)
					{
							temperaturaViejo=temperatura;
					}
			}



			if (edad<12||edad>60 &&temperatura>38) 
			{
					alert("esta en riesgo "+nombre);
			}

			if (sexo=='f') 
			{
					contadorMujeres++;
					sumaMujeres=sumaMujeres+edad;
			}

			suma=suma+edad;


			contador++;
			respuesta=confirm("ingrese aceptar para continuar");

	}
	promedio=suma/contador;
	promedioMujeres=sumaMujeres/contadorMujeres

	document.write("a. la persona con maxima temperatura es "+nombreMaxTemp+" y su sexo es "+sexoMaxTemp+"<br>");
	document.write("b. la temperatura del mas joven es de "+temperaturaJoven+" y la temperatura del mas viejo es "+temperaturaViejo+"<br>");
	document.write("c.el promedio general de edad es "+promedio+" y el promedio de mujeres es de :"+promedioMujeres+"<br>")
}
