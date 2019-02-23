console.log("hi");
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var WIDTH = 600;
var HEIGHT = 400;
var x, y;
var mx,my;
var x2,y2;
var mx2, my2;


function circle (x,y,radius){
ctx.beginPath();
ctx.arc(x,y,radius,0,6.28);
ctx.closePath();
ctx.fillStyle = "green";
ctx.fill();
}

function clear(){
ctx.clearRect(0,0,WIDTH,HEIGHT);
}

function draw(){
clear();
circle(x,y,30);
circle (x2,y2, 10);

if(x+mx <0 || x +mx>WIDTH){
	mx=-mx;
}

if(y+my <0 || y +my>HEIGHT){
	my=-my;
}
if(x2+mx2 <0 || x2 +mx2>WIDTH){
	mx2=-mx2;
}

if(y2+my2 <0 || y2 +my2>HEIGHT){
	my2=-my2;
}
x += mx;
y += my;
x2 +=mx2;
y2+= my2;
}

function init(){
	x=300;
	y=200;
	x2= 56;
	y2= 35;
	mx=20;
	my=20;
	mx2=200;
	my2=200;
	return setInterval(draw,10);
}
init();
// circle(100,100,30);
