/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantlamparitas;
 	var descuento;
 	var precioBruto;
 	var Valorlampara;
 	var preciofinal;
 	var marca;
 	
 	

	Valorlampara=35;
	

	cantlamparitas=document.getElementById('Cantidad').value;
 	cantlamparitas=parseInt(cantlamparitas);

 	marca=document.getElementById('Marca').value;

 	precioBruto=cantlamparitas*Valorlampara;
 	
	if (cantlamparitas>5) 
 	{
 		descuento=50;
 		
 	}else
 	{   
 		if (cantlamparitas==5) 
		{ 
											//NO PONGO LAS CUENTAS EN CADA UNO PORQUE SIEMPRE SON LAS MISMAS, DONDE CAMBIA SOLO ES EN EL VALOR DEL DESCUENTO, ENTONCES PONGO LA CUENTA DEL DESCUENTO AFUERA Y ESTABLEZCO EL DESCUENTO EN CADA UNO Y YA ESTA.
			if (marca=="ArgentinaLuz") 
			{
				descuento=40;
 	
			}else
			{ descuento=30;

			}
 		}
 		else 
 		{
 		  if (cantlamparitas==4) 
		   {
				if (marca=="ArgentinaLuz"|| marca=="FelipeLamparas") 
				{
					descuento=25;
				
				}else
				{
					descuento=20;
				}

		   }
		   else
 		    {
 				if (cantlamparitas==3) 
				{
					if (marca=="ArgentinaLuz") 
					{
						descuento=15;
					}
					else
					{
							if (marca=="FelipeLamparas") 
							{
								descuento=10;
					
							}else
							{
								descuento=5;
							}
					}
				}
 				else
 				{
 					descuento=0;
 				}
 			
 			}
 				
		}
 	}

	
 	preciofinal=precioBruto-(precioBruto*(descuento/100));
	document.getElementById('precioDescuento').value = preciofinal;

 	
}


