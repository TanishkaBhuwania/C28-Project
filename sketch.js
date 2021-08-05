
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	boy = loadImage('Sprites/boy.png');
	mango = loadImage('Sprites/mango.png');
	stone = loadImage('Sprites/stone.png');
    tree = loadImage('Sprites/tree.png');
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground1 = new Ground(600,490,1200,35);
	box1 = new Box(300,300,100,200);
	addImage('boy.png', box1.x, box1.y);

	Engine.run(engine);
  
}


function draw() {
	background(0);
  rectMode(CENTER);

  ground1.display();
  box1.display();
  
  
  drawSprites();
 
}



