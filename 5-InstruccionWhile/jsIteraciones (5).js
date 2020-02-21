	function mostrar()
{

var sexo;
sexo=prompt("ingrese su sexo(f ó m)");

while(sexo!='m' && sexo!='f')
{		
	console.log("invalido")
	sexo=prompt("ingrese un valor valido");

}

console.log(sexo);
document.getElementById('Sexo').value=sexo;



}//FIN DE LA FUNCIÓN