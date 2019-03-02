var game = new Phaser.Game(800, 600, Phaser.AUTO,'', {preload:preload, create:create, update:update});

var score = 0;
var life = 3;

function preload(){
  game.load.image('sky', 'assets/sky.png');
  game.load.image('ground', 'assets/platform.png');
  game.load.image('star', 'assets/star.png');
  game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
  game.load.spritesheet('baddie', 'assets/baddie.png', 32, 32);
}

function create(){
	game.physics.startSystem(Phaser.Physics.ARCADE);
	
	// Create the sky
	game.add.sprite(0, 0, 'sky');
	// Create group of platforms
	platforms = game.add.physicsGroup();
	platforms.enableBody = true;
	// Create the ground
	var ground = platforms.create(0, 550, 'ground');
	ground.scale.setTo(2, 2);
	ground.body.immovable = true;
	// Create the ledges
	var ledge = platforms.create(400, 400, 'ground');
	ledge.body.immovable = true;
	ledge = platforms.create(-100, 250, 'ground');
	ledge.body.immovable = true;

	//set text style
	var style = {font: "bold 32px Arial", fill: "#fff"}
	//positioning the score
	scorelabel = game.add.text(300,560, "Score: ", style);
	scoretext = game.add.text(420, 560, score,style);
	// scorelabel.setShadow(3,3,'rgba(0,0,0,0.5)',2);
	// scoretext.setShadow(3,3,'rgba(0,0,0,0.5)',2);

	//positioning the lives
	lifelabel = game.add.text(10,5, "Lives: ", style);
	lifetext = game.add.text(120,5, life,style);
	// lifelabel.setShadow(3,3,'rgba(0,0,0,0.5)',2);
	// lifetext.setShadow(3,3,'rgba(0,0,0,0.5)',2);
player = game.add.sprite(32,400,'dude');
	player.animations.add('left',[0,1,2,3], 10,true);
	player.animations.add('right'[5,6,7,8],10,true);
	player.body.bounce.y = 0.2;
	player.body.gravity.y = 300;
	player.body.collideWorldBounds = true;
baddie = game.add.sprite(760,20,'baddie');
	baddie.animations.add('left',[0,1], 10,true);
	baddie.animations.add('right'[2,3], 10,true);
	baddie.body.bounce.y = 0.2;
	baddie.body.gravity.y = 300;
	baddie.body.collideWorldBounds = true;
}

function update(){

}