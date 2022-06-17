
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var mainground,leftside,rightside

function preload(){
	
}

function setup() {
	createCanvas(1000, 400);

    engine = Engine.create();
	world = engine.world;


    var ball_option = {
        isStatic:false,
        friction:0,
        restitution:0.8,
        density:1.2
    }


    ball = Bodies.circle(150,250,10,ball_option)
    World.add(world,ball)
	
    mainground = new Ground(150,350,1800,10)

    leftside = new Ground(600,320,10,70)
    rightside = new Ground(750,320,10,70)
  
}


function draw() {

    Engine.update(engine)

  background(0);

  ellipseMode(CENTER)

    ellipse(ball.position.x,ball.position.y,40)

    mainground.display()

    leftside.display()
    rightside.display()
  
    Keypressed()

  drawSprites();
 
}

function Keypressed(){
    if(keyDown("up_arrow")){
        Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
    }
}



