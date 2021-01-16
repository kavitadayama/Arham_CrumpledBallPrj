
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinLeft;
var dustbinRight;
var dustbinBottom;

var paper1;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();

	world = engine.world;


	ground = new Ground(600,height-30,1200,20);

	paper1 = new Paper(200, 200);

	dustbinBottom=new Dustbin(900,540,140,20,{isStatic:true});
	
	dustbinLeft=new Dustbin(840,500,20,100, {isStatic:true});
	;

	dustbinRight=new Dustbin(960,500,20,100, {isStatic:true});
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
Engine.update(engine);

ground.display();
paper1.display();

dustbinBottom.display();
dustbinLeft.display();
dustbinRight.display();
 // drawSprites();
 
 
}


function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:157, y:-200});
	}
}
