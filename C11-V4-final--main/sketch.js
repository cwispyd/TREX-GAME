var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud, cloudImage;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
 groundImage=loadImage("ground2.png");
 cloudImage=loadImage("cloud.png");
}

function setup() {
  createCanvas(600, 200);
  
  //create a trex sprite
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50
  
  //create ground sprite
  ground = createSprite(200,180,400,20);
 ground.addImage(groundImage)
 invisibleGround=createSprite(200,185,400,10);
 invisibleGround.visible=false;



var r=Math.round(random(1,100));
console.log(r);

}

function draw() {
  background("black");
  //console.log(frameCount);

 ground.velocityX=-2;
 if(ground.x<0)
 ground.x=200;
  //jumping the trex on space key press
  if(keyDown("space")&&trex.y>100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
 
 //stop trex from falling down 
  trex.collide(invisibleGround);
 spawnClouds();
  drawSprites();
}

function spawnClouds(){
if (frameCount% 50 === 0)
{
  cloud=createSprite(600,100,40,10);

  cloud.velocityX=-3;

  cloud.addImage(cloudImage);
cloud.y=Math.round(random(5,40));
 cloud.scale=0.3;
}


}