const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

var tree;
var ground;
var boy;
var stone;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;

function preload(){
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(700,650,1400,20);
	tree = new Tree(350,200,700,700);
	mango1 = new Mango(250,100);
	mango2 = new Mango(100,200);
	mango3 = new Mango(300,250);
	mango4 = new Mango(475,250);
	mango5 = new Mango(170,250);
	mango6 = new Mango(275,180);
	mango7 = new Mango(375,100);
	mango8 = new Mango(500,150);
	mango9 = new Mango(405,200);
	mango10= new Mango(600,250);
	mango11= new Mango(350,45);
	stone = new Stone(600,50);
	boy = new Boy(900,300,300,500);
	rope = new Rope(stone,{x : 600 , y : 50});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  stone.display();
  boy.display();
  rope.display();
  
 
}

function mouseDragged(){

    //Matter.Body.setPosition(stone.body , { x : mouseX , y : mouseY} );

}

function mouseReleased(){

 //boy.fly();

}

function detectCollision(){
}