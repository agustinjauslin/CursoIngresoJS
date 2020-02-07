/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var primerNumero;
	var segundoNumero;
	var suma;

	primerNumero=document.getElementById('numeroUno').value;
	primerNumero=parseInt(primerNumero);






	segundoNumero=document.getElementById('numeroDos').value;//toma como texto el valor ingresado asi que no se suma en la variable suma
	segundoNumero=parseInt(segundoNumero);//transforma el text a entero


	suma=primerNumero+segundoNumero;//si los datos son string los concatena,pero si los transformo ne int(con parseInt) se suman.




	console.log(suma);





}

