
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
bobObject1= new Bob(400,200);
bobObject2 = new Bob(405,200);
bobObject3 = new Bob(410,200);
bobObject4 = new Bob(415,200);
bobObject5 = new Bob(420,200);


rope1=new Rope(bodyObject1.body,roofObject.body,bobDiameter2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 bobObject1.display();
 bobObject2.display();
 bobObject3.display();
 bobObject4.display();
 bobObject5.display();
}



