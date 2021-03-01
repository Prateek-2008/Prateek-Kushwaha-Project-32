const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var engine,world;

var ground;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;

var block11,block12,block13,block14,block15,block16,block17,block18,block19,block20;

var block21,block22,block23,block24,block25,block26,block27,block28,block29,block30;

var block31,block32,block33,block34,block35,block36,block37,block38,block39,block40;

var block41,block42,block43,block44,block45,block46,block47,block48,block49,block50;

var block51,block52,block53,block54,block55,block56,block57,block58,block59,block60;

var ball;

var slingShot;

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

    ground=new Ground(650,600,1300,20);

	block1=new Block(900,570);
	block2=new Block(900,540);
	block3=new Block(900,510);
	block4=new Block(900,480);
	block5=new Block(900,450);
	block6=new Block(900,420);
	block7=new Block(900,390);
	block8=new Block(900,360);
	block9=new Block(900,330);
	block10=new Block(900,300);

	block11=new Block(940,570);
	block12=new Block(940,540);
	block13=new Block(940,510);
	block14=new Block(940,480);
	block15=new Block(940,450);
	block16=new Block(940,420);
	block17=new Block(940,390);
	block18=new Block(940,360);
	block19=new Block(940,330);
	block20=new Block(940,300);

	block21=new Block(980,570);
	block22=new Block(980,540);
	block23=new Block(980,510);
	block24=new Block(980,480);
	block25=new Block(980,450);
	block26=new Block(980,420);
	block27=new Block(980,390);
	block28=new Block(980,360);
	block29=new Block(980,330);
	block30=new Block(980,300);

	block31=new Block(1020,570);
	block32=new Block(1020,540);
	block33=new Block(1020,510);
	block34=new Block(1020,480);
	block35=new Block(1020,450);
	block36=new Block(1020,420);
	block37=new Block(1020,390);
	block38=new Block(1020,360);
	block39=new Block(1020,330);
	block40=new Block(1020,300);

	block41=new Block(1060,570);
	block42=new Block(1060,540);
	block43=new Block(1060,510);
	block44=new Block(1060,480);
	block45=new Block(1060,450);
	block46=new Block(1060,420);
	block47=new Block(1060,390);
	block48=new Block(1060,360);
	block49=new Block(1060,330);
	block50=new Block(1060,300);

	block51=new Block(1100,570);
	block52=new Block(1100,540);
	block53=new Block(1100,510);
	block54=new Block(1100,480);
	block55=new Block(1100,450);
	block56=new Block(1100,420);
	block57=new Block(1100,390);
	block58=new Block(1100,360);
	block59=new Block(1100,330);
	block60=new Block(1100,300);

    ball=new Ball(200,200,30);

	slingShot = new SlingShot(ball.body,{x:200, y:200});
    
	Engine.run(engine);

}

function draw() {

  background(0000);
 
  ground.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();

  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();

  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();

  block31.display();
  block32.display();
  block33.display();
  block34.display();
  block35.display();
  block36.display();
  block37.display();
  block38.display();
  block39.display();
  block40.display();

  block41.display();
  block42.display();
  block43.display();
  block44.display();
  block45.display();
  block46.display();
  block47.display();
  block48.display();
  block49.display();
  block50.display();

  block51.display();
  block52.display();
  block53.display();
  block54.display();
  block55.display();
  block56.display();
  block57.display();
  block58.display();
  block59.display();
  block60.display();

  ball.display();

  slingShot.display();
  
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if(keyCode===32){
      slingShot.attach(ball.body);
    }
}