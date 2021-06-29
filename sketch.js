const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events;

var bkimg;
var engine , world;
var girl;
var snow =[];
var snowflake = [];
var snowsound;
var ground;
var boy,boyImg;






function preload(){
  bkimg = loadImage("snow2.jpg");
  snowsound = loadSound("snow.mp3");
 girlImg = loadImage("snowgirl.png");
 boyImg = loadImage("snowboy.png");
  
}









function setup() {
  createCanvas(1200,600);
  snowsound.loop();
 
  engine = Engine.create();
  world = engine.world;

 girl = createSprite(250,520,50,100);
 girl.addImage(girlImg);
 girl.scale = 0.14;

 
boy = createSprite(800,520,50,100);
 boy.addImage(boyImg);
 boy.scale = 0.21;

 ground = createSprite(600,600,1200,20);
ground.visible = false;

  

}




function draw() {
background(bkimg);  


if(keyDown("space") && girl.y>=470){
  girl.velocityY= -7;
  
}

girl.velocityY = girl.velocityY + 0.2

//console.log(girl.y);
girl.collide(ground);

if(keyDown("LEFT_ARROW")){
  girl.x = girl.x - 6;
}

if(keyDown("RIGHT_ARROW")){
  girl.x = girl.x + 6;
}


if(keyDown("space") && boy.y>=470){
  boy.velocityY= -8;
  
}
boy.velocityY = boy.velocityY + 0.2
boy.collide(ground);

if(keyDown("LEFT_ARROW")){
  boy.x = boy.x +6;
}

if(keyDown("RIGHT_ARROW")){
 boy.x = boy.x - 6;
}

drawSprites();


Engine.update(engine);




//drawSprites();

if(frameCount % 8 ===0){
  snow.push(new Snow(random(10,1200),-10,10));
}
//console.log(snowflake.radius);

for ( var m = 0 ; m < snow.length; m ++){
  snow[m].display();
}

if(frameCount % 15 === 0 ){
  snowflake.push(new Snowflake(random(50,1100),-30,60));
}

for(var s = 0 ; s <snowflake.length ; s++){
  snowflake[s].display();
}
 

}

