
function draw(){
	var canvas = document.getElementById('canvas');
 	if (canvas.getContext){
    	var ctx = canvas.getContext('2d');
	
		canvas.addEventListener("mousemove", function (evt){
		var mensaje="Mouse positiion: "+evt.clientX+ ", "+ evt.clientY;
		console.log(mensaje);
		})
	
		
		ctx.strokeStyle="rgb(35,35,35)";
		ctx.lineWidth=8;
	//	roundedRect(ctx,240,240, 300,300,15);
  	    ctx.moveTo(100,200);    //lo mueve hacia 
		ctx.lineTo(100,475);    //b
  		ctx.lineTo(250,525);    //c
  		ctx.lineTo(475,475);    //d
  		ctx.lineTo(475,200);    //e
  		ctx.lineTo(250,250);    //f
  		ctx.lineTo(100,200);    //g
  		ctx.lineTo(325,150);    //h
  		ctx.lineTo(475,200);    //i
		ctx.moveTo(250,250);    //
  		ctx.lineTo(250,525);    //
		ctx.stroke();

		cubo3d(30, 34, 60);
	
	}	
		
}


/*Obtine los vertices del cubo en un espacio ortogonal visto desde el eje x, recibe la longitud de la arista y la inclinacion del eje que une los vertices opuestos (para un cubo de frente theta=30º y alpha=45)*/
function cubo3d(r, zeta, fi){
	var x, y, z, a, b, c;

	zeta=zeta*0.017456;
	fi=fi*0.01745;
	//zeta=zeta+(Math.sqrt(2)/2);
	
	/*x=r*(Math.sin(zeta))*(Math.cos(fi));
	y=r*(Math.sin(zeta))*(Math.sin(fi));
	z=r*(Math.cos(zeta));*/

	//Rotar en el eje z
	


		
}

function rotarV(x1, y1, z1, zetaX, zetaY, zetaZ){
	
	x=x1;
	y=y1*Math.cos(zetaX)+z1*Math.sin(zetaX);
	z=(-1)*y1*Math.sin(zetaX)+z1*Math.cos(zetaX);
	
	x=x*Math.cos(zetaY)+(-1)*z*Math.sin(zetaY);
	z=x*Math.sin(zetaY)+z*Math.cos(zetaY);
	
	x=x*Math.cos(zetaZ)+y*Math.sin(zetaZ);
	y=(-1)*x*Math.sin(zetaZ)+y*Math.cos(zetaZ);
			
}
