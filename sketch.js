
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper
var ground
var d1,d2,d3,bimg



function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	paper= new Paper()
	ground = new Ground(400,450)  
	d1= new Dustbin(600,380,20,120)
	d2= new Dustbin(700,380,20,120)
	d3= new Dustbin(650,428,120,20)


}



function draw() {
  rectMode(CENTER);
  Engine.update(engine);

  background(0);
  paper.display()
    ground.display();
	d1.display();
	d2.display();
	d3.display();

	keyPressed()

  drawSprites();
 
}

function 	keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:10,y:-25})
	}
}






  
