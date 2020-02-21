	function mostrar()
{

var sexo;
sexo=prompt("ingrese su sexo(f ó m)");
		while(!(isNaN(sexo)))
		{
			sexo=prompt("error solo se aceptan letras");
		}	

while(sexo!='m' && sexo!='f')
{		
	console.log("invalido")
	sexo=prompt("ingrese un sexo valido('f' para femenino y 'm' para masculino)");
	while(!(isNaN(sexo)))//valida si ingresa algo que no sea un numero
		{
		sexo=prompt("error solo se aceptan letras");
		
		
		}

}

console.log(sexo);
document.getElementById('Sexo').value=sexo;



}//FIN DE LA FUNCIÓN