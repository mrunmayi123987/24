
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rubbish;
var dustbin;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  rubbish = new Paper(200,300);
  dustbin = new Dustbin(400,260,300,PI/2);
  ground = new Ground(700,height,800,20);


	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  rubbish.display();
  dustbin.display();
  ground.display();
 // drawSprites();
 
}



