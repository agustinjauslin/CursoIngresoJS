function mostrar()
{
	var planeta;
	planeta=prompt("ingrese un planeta del sistema solar");


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
			alert("no es un planeta valido");
			break;		
	}

}
