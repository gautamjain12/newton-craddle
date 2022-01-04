var engine,world;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=	Matter.Render;

var roof,bob,bob2,bob3,bob4,bob5,rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob=new Bob(250,300);
bob2=new Bob(300,300);
bob3=new Bob(350,300);
bob4=new Bob(400,300);
bob5=new Bob(450,300);
roof=new Ground(350,100,300,40);
rope1=new Rope(bob.body,roof.body,-100,0)
rope2=new Rope(bob2.body,roof.body,-50,0);
rope3=new Rope(bob3.body,roof.body,0,0);
rope4=new Rope(bob4.body,roof.body,50,0);
rope5=new Rope(bob5.body,roof.body,100,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  drawSprites();
  bob5.display();
  roof.display();
  bob4.display();
  bob.display();
  bob2.display();
  bob3.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(bob.body,bob.body.position,{x:-730,y:0});
  }
}



