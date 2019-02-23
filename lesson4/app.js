var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

 var dog =new Image();

dog.src = "download (1).jpeg";

dog.onload = function (){
ctx.drawImage(dog,500,200,100,200);

}

 var twet =new Image();
twet.src = "png-small-1.png";

twet.onload = function (){
	ctx.drawImage(twet,300,50,100,100);
}

 var sap =new Image();
sap.src = "png-small-1.png";

sap.onload = function (){
	ctx.drawImage(sap,500,500,100,100);
}
 var nop =new Image();
nop.src = "png-small-1.png";

nop.onload = function (){
	ctx.drawImage(nop,100,500,100,100);
}
 var sop =new Image();
sop.src = "png-small-1.png";

sop.onload = function (){
	ctx.drawImage(sop,100,250,100,100);
}



ctx.fillStyle= 'rgb(200,50,10)';
ctx.fillRect(1,1,1000,1000);
ctx.strokeStyle = "green";
ctx.strokeRect(50,100,100,10);

ctx.clearRect(125,150,10,10);

ctx.font ="60px Trebuchet MS";
ctx.fillStyle = "royalblue";
ctx.fillText("Canvas",40,125);
ctx.strokeStyle = "seagreen";
ctx.strokeText("Text",140,205)
