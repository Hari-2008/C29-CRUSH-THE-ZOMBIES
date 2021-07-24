const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var stones = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  ground = new Base(0,height-10,width*2,20,"blue");
  rightWall = new Base(width,height/2+50,200,100,"brown")
  leftWall = new Base(0,height/2+50,200,100,"brown")
  bridge = new Bridge(24,{x:width/2-590,y:height/2}) 
  jointPoint = new Base(width - 100, height / 2 + 10, 40, 20, "#8d6e63", true);
  Matter.Composite.add(bridge.body,jointPoint);
  jointLink = new Link(bridge,jointPoint)
  frameRate(80);
  for(var i = 0;i <=8; i++){
    var x =  random(width/2-200,width/2+300)
    var y =  random(-10,140);
    var stone = new Stone(x,y,40,40);
    stones.push(stone)
  }

}

function draw() {
  background(51);
  Engine.update(engine);

  ground.show()
  //fill("brown")
  leftWall.show()
  rightWall.show()
  bridge.show();

  /*for(var i = 0;i<stones.length;i++){
    stones[i].show();
  }*/
  for(var stone of stones){
    stone.show()
  }
}
