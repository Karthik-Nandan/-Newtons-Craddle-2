
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;
var  pendulumDiameter=50;
function preload()
{
	
}

function setup() {
	canvas=createCanvas(800, 600);


    engine = Engine.create();
    world = engine.world;

    let canvasmouse=Mouse.create(canvas.elt);
     canvasmouse.pixelRatio=pixelDensity();
     
     var options={
       mouse:canvasmouse
     }

     mConstraint=MouseConstraint.create(engine,options);
     World.add(world,mConstraint);

    pendulum1=new Pendulum(300,350,50);
    pendulum2=new Pendulum(350,350,50);
    pendulum3=new Pendulum(400,350,50);
    pendulum4=new Pendulum(450,350,50);
    pendulum5=new Pendulum(500,350,50);
    roof1=new roof(400,100,300,40)
    ground=new roof(200,700,900,20)
    sling1=new Sling( pendulum1.body,roof1.body,-pendulumDiameter*2,0)
    sling2=new Sling( pendulum2.body,roof1.body,-pendulumDiameter*1,0)
    sling3=new Sling( pendulum3.body,roof1.body,pendulumDiameter*0,0)
    sling4=new Sling( pendulum4.body,roof1.body,pendulumDiameter*1,0)
    sling5=new Sling( pendulum5.body,roof1.body,pendulumDiameter*2,0)

	  Engine.run(engine);
  
}


function draw() {
  background("lightblue")
  rectMode(CENTER);
  
  pendulum1.display();
  pendulum2.display();

  pendulum3.display();
  pendulum4.display();

  pendulum5.display();
  ground.display();

  roof1.display();
  sling1.display();

  sling2.display();
  sling3.display();

  sling4.display();
  sling5.display();

  drawSprites();
}













