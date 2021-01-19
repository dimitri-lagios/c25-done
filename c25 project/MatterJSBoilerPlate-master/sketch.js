const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball1;
var backgroundImg,platform;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    platform = new Ground(600, 380, 1200, 10);
    ball1 = new Ball(100,350,25);   
   
    bin1 = new Bin2(1100,325,110,110);
    bin2 = new Bin(1150,325,10,110); 
    bin3 = new Bin(1050,325,10,110);
    
}

function draw(){
    background(100);
    Engine.update(engine);
    
    ball1.display();
   
    //bin2.display();
    //bin3.display();
   
    bin1.display();
    platform.display();
  
    
}

function keyPressed(){
    if(keyCode === 32){
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-30})    
    }

}