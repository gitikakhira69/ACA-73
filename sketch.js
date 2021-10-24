//Write your code here
const Engine = Matter.Engine;
const Composite= Matter.Composite;
const Bodies = Matter.Bodies;

var engine, world;
var ground1,ground2;
var ball,plank;
function setup(){
    canvas = createCanvas(1500,600);
    engine = Engine.create();
    world = engine.world;

    plank = new Plank(400,300,200,20);
    // plank2 = Bodies.rectangle(400,250,200,20, plank_options);
    // plank3 = Bodies.rectangle(400,200,200,20, plank_options);
    // box = Bodies.rectangle(400,150,60,60, box_options);
    ground1 = new Ground(1000,560,500,20);
    ground2 = new Ground(300,350,350,20);
    // ball1 = Bodies.circle(200, 300, 35, ball_options);
    // ball2 = Bodies.circle(200, 250, 35, ball_options);
     
}

function draw(){
    background("#C0FEFC");
    Engine.update(engine);
   
   ground1.display()
   ground2.display()
   plank.display()
}