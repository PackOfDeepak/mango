
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
	 ground = new Ground(670,400,400,10);
	stone = new Stone(50,650,5);

	mango1 = new Mango(750, 50, 5);
	mango2 = new Mango(750, 50, 5);
	mango3 = new Mango(750, 50, 5);
	mango4 = new Mango(750, 50, 5);
	mango5 = new Mango(750, 50, 5);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}
function detectcollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position
	var distance=dist(stoneBodyPostion.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<-lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);

	}
}



