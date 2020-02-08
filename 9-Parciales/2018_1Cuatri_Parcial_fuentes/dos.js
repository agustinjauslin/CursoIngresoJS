/*
	Enunciado:
	Bienvenidos. 
	mostrar por alert el mensaje "usted es xxxxx y vive en la localidad de xxxxxxxx".


*/


function mostrar()
{
  var nombre;//elNombre
  var localidad;//laLocalidad


  nombre=document.getElementById('elNombre').value;//.value solo es para get elemt by id


  localidad=document.getElementById('laLocalidad').value;


  alert("usted es "+nombre+" y vive en la localidad de "+localidad);




}
