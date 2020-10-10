
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
	cup= new Cup(600,630,200,10,);
	
ball=new Ball(100,600,70);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  cup.display();
 
  ball.display();
  function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(this.body,pos,{x:85,y:-85})
	}
}
  drawSprites();
 
}



