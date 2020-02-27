function mostrar()
{
	var planeta;
	planeta=prompt("ingrese un planeta del sistema solar");
	while(!(planeta=='mercurio'||planeta=='venus'||planeta=='tierra'||planeta=='marte'||planeta=='jupiter'||planeta=='saturno'||planeta=='urano'||planeta=='neptuno'||planeta=='pluton'))
	{
		planeta=prompt("ingrese un planeta del sistema solar(2)");
	}




	switch(planeta)
	{
		case "mercurio":
		case "venus":
			alert("acá hace más calor");
			break;

		case "tierra":
			alert("acá vivimos en una sociedad");
			break;

		case "marte":
		case "jupiter":
		case "urano":	
		case "neptuno":
		case "pluton":
			alert("acá hace más frio");
			break;

		default:
			alert("no es un planeta valido,recuerde que los planetas deben ser escritos en muniscula y sin tildes(ej:mercurio,venus,tierra,marte,jupiter,saturno,urano,neptuno,pluton)");
			break;		
	}

}
