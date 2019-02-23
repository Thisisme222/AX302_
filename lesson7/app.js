var game = new Phaser.Game(800,600,Phaser,AUTO,'',{preload:preload,create:create,update:update});
var score = 0;
var life = 5;

function preloda(){
game.load.image('sky','assets/sky.png');
game.load.image('ground','assets/platform.png');
game.load.image('star','assets/star.png');
game.load.spritesheet('dude','assets/dude.png',32,48);
game.load.spritesheet('baddie','assets/baddie.png',32,32);
}

function create(){
game.physics.startSystem(Phaser.Physics.ARCADE);

game.add.sprite(0,0,'sky');

platform = game.add.physicsGroup();
platform.enableBody = true;

var ground = platforms.create(0,550,'ground');
ground.scale.setTo(2,2);
ground.body.immovable = true;

var ledge = platforms.create(400,400 'ground');
ledge.body.immovable = true;

var ledge = platforms.create(-100,250 'ground');
ledge.body.immovable = true;

var style = {font: "bold 32px Arial", fill; "#fff"}

scoreLabel = game.add.text(300,560,"Score: ",style);
scoretext=game.add.text(420,560,score,style);

lifelabel =game.add.text(10,5,"Lives:  ",style);
lifetext = game.add.text(120,5,life,style);
}

function update(){

}