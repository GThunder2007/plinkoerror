const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world,engine;

var divisionHeight=300;

var particles = [];
var plinkos = [];
var divisions = [];


function setup() {
	createCanvas(800, 800);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20);

	for(var k = 0; k <=400; k = k + 80) {
		divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
	} 

	for (var k = 0; k < divisions.length; k++) {
		divisions[k].display();
	} 
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
}