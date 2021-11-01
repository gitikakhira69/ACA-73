//Write your code here
const Engine = Matter.Engine;
const Composite= Matter.Composite;
const Bodies = Matter.Bodies;

var engine, world;
var ground1,ground2;
var ball,plank,plank2,plank6;
var plank3,plank4,plank5;
function setup(){
    canvas = createCanvas(1500,600);
    engine = Engine.create();
    world = engine.world;

    plank = new Plank(300,330,100,20);
    plank2 = new Plank(1000,540,100,20);

    plank3 = new Planks(1000,520,300,20);
    plank4 = new Planks(300,310,300,20);
    plank5 = new Planks(300,190,300,20);
    // box = Bodies.rectangle(400,150,60,60, box_options);
    ground1 = new Ground(1000,560,500,20);
    ground2 = new Ground(300,350,350,20);
    ball1 = new Balls(230, 250, 100);
    ball2 = new Balls(370, 250, 100 );
     
    plank6 = new Plank(300,150,100,20);
}

function draw(){
    background("#C0FEFC");
    Engine.update(engine);
   
   ground1.display()
   ground2.display()
   plank.display()
   plank2.display()
   plank3.display()
   plank4.display()
   ball1.display()
   ball2.display()
   plank5.display()
   plank6.display()
}