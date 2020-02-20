	function mostrar()
{

var sexo;
sexo = prompt("ingrese f ó m .");



while(sexo!="m" || sexo!="f")
{
		sexo = prompt("ingrese f ó m por favor");
}
document.getElementById('Sexo').value=sexo;
alert("fin");

}//FIN DE LA FUNCIÓN