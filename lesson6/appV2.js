console.log("Hello");

// Declaring all variables
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Width and height of canvas
var WIDTH = 600;
var HEIGHT = 600;
// Starting position and radius of player sprite
var x = 300;
var y = 300;
var s = 50;
// Holding the speed in the x and y directions
var mx = 0;
var my = 0;
// Positions of circle
var circleX;
var circleY;
var circleS = 50;
var circleCollision = false;

var score = 0;

//Challenge: Position of cherry
var cherryX;
var cherryY;
var cherryS = 25;
var cherryCollision = false;

//Challenge: Position of ghost
var ghostX;
var ghostY;
var ghostS = 50;
var ghostCollision = false;

//challenge: Game over
var gameover = false;

// Importing images onto canvas
function drawPacman() {
	var pacman = new Image();
	pacman.src = "pacman.png";
	ctx.drawImage(pacman, x, y, s, s);
}

function drawCircle() {
	var circle = new Image();
	circle.src = "circle.png";
	ctx.drawImage(circle, circleX, circleY, circleS, circleS);
}

//challenge cherry
function drawCherry() {
	var cherry = new Image();
	cherry.src = "cherry.png";
	ctx.drawImage(cherry, cherryX, cherryY, cherryS, cherryS);
}

//challenge
function drawGhost() {
	var ghost = new Image();
	ghost.src = "ghost.png";
	ctx.drawImage(ghost, ghostX, ghostY, ghostS, ghostS);
}


// Wiping canvas
function clear () {
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

// Initialise our animation
function init() {
	// Put circles in random positions
	circleX = Math.floor(Math.random() * (WIDTH - circleS));
	circleY = Math.floor(Math.random() * (HEIGHT - circleS));
	//challenge
	cherryX = Math.floor(Math.random() * (WIDTH - cherryS));
	cherryY = Math.floor(Math.random() * (HEIGHT - cherryS));
	ghostX = Math.floor(Math.random() * (WIDTH - ghostS));
	ghostY = Math.floor(Math.random() * (HEIGHT - ghostS));
	
	// Waiting for user to press keyboard (behaviour coded in keydownControl)
	window.onkeydown = keydownControl;
	// Redraws our canvas every 10ms
	return setInterval(draw, 10);
}

// Draw scene function
function draw() {
	clear();
	if(gameover != true){
		drawPacman();
		drawCircle();
		//challenge - draw objects
		drawCherry();
		drawGhost();
		// Tells our sprite to bounce off the walls and go in the opposite direction
		if (x + mx > WIDTH - s || x + mx < 0){
			mx = -mx;
		} else if (y + my > WIDTH - s || y + my < 0) {
			my = -my;
		}
		// Moves our sprite
		x += mx;  
		y += my;

		// Is there a collision?
		collisionCheck();
		collisionHandle();

		//Challenge: AI
		followPacman();
	}
	//challenge
	else{
		ctx.font = "40px Impact";
		ctx.fillText("GAME OVER",200, 300);
	}
}

function collisionHandle() {
	if (circleCollision) {
		circleX = Math.floor(Math.random() * (WIDTH - circleS));
  		circleY = Math.floor(Math.random() * (WIDTH - circleS));
  		score += 1;
  		document.getElementById("score").innerHTML = score;
	}

	//challenge: cherry worth 5 pts
	if (cherryCollision) {
		cherryX = Math.floor(Math.random() * (WIDTH - cherryS));
  		cherryY = Math.floor(Math.random() * (WIDTH - cherryS));
  		score += 5;
  		document.getElementById("score").innerHTML = score;
	}

	//Challenge: game ends if caught by ghost
	if (ghostCollision) {
  		gameover = true;
	}
}

function collisionCheck() {
	if( (x+s >= circleX) && (x <= circleX + circleS) && (y+s >= circleY) && (y <= circleY + circleS) ) {
		circleCollision = true;
	} else {
		circleCollision = false;
	}

	//check if colliding with cherry
	if( (x+s >= cherryX) && (x <= cherryX + cherryS) && (y+s >= cherryY) && (y <= cherryY + cherryS) ) {
		cherryCollision = true;
	} else {
		cherryCollision = false;
	}

	//check if colliding with ghost
	if( (x+s >= ghostX) && (x <= ghostX + ghostS) && (y+s >= ghostY) && (y <= ghostY + ghostS) ) {
		ghostCollision = true;
	} else {
		ghostCollision = false;
	}
}

function keydownControl(e) {
	// Change the direction depending on which button is pressed
	if(e.keyCode == 37) {
		mx = -4;
		my = 0
	} else if (e.keyCode == 38) {
		mx = 0;
		my = -4
	} else if (e.keyCode == 39) {
		mx = 4;
		my = 0
	} else if (e.keyCode == 40) {
		mx = 0;
		my = 4;
	}
}


//Challenge: AI to move the ghost
function followPacman() {
	if(ghostX < x){
		ghostX += 1;
	}
	if(ghostX > x){
		ghostX -= 1;
	}
	if(ghostY < y){
		ghostY += 1;
	}
	if(ghostY > y){
		ghostY -= 1;
	}
}

init();