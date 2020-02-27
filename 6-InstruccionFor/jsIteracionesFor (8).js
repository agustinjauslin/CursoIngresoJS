function mostrar()
{
var numeroIngresado;
var contador;
var bandera;
bandera=0;

numeroIngresado=prompt("ingresee numero");


for(contador=2;contador<numeroIngresado;contador++)
{
		if (numeroIngresado%contador==0) 
		{
				bandera=1;
				break;//cuando no es igual al numero mismo ingresado
		}

}
if (bandera!=1) 
{
	alert("el primo es el "+numeroIngresado);
}
else
{
	alert("el primo no es "+numeroIngresado);
}






}//FIN DE LA FUNCIÓN