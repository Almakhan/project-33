 const Engine = Matter.Engine;
 const World = Matter.World;
const Events = Matter.Events;
  const Bodies = Matter.Bodies;

 var snows=[];

var backgroundImg;
var santaImg,santa;
var giftImg,gift;
var stop;
var gift1Img,gift1;
var girlImg,girl;
var boyImg,boy;


function preload(){
  backgroundImg=loadImage("bg.jpg");
  santaImg=loadImage("santa.png");
  giftImg=loadImage("gift.png")
  giftImg1=loadImage("gift1.png")
  girlImg=loadImage("girl.png")
  boyImg=loadImage("boy.png")
}

function setup() {

  engine = Engine.create();
  world = engine.world;

  createCanvas(1008,600);
  rectMode(CENTER);
  
  stop = createSprite(710,550,30,10);

  gift = createSprite(710,130,10,10);
  gift.addImage(giftImg);
  gift.scale=0.3

  santa= createSprite(width/2, 100,10,10);
  santa.addImage(santaImg);
  santa.scale=1.2

  gift1 = createSprite(710,510,10,10);
  gift1.addImage(giftImg1);
  gift1.scale=0.4

  girl = createSprite(810,480,10,10);
  girl.addImage(girlImg);
  girl.scale=0.5

  boy = createSprite(610,500,10,10);
  boy.addImage(boyImg);
  boy.scale=0.4

  gift1.visible=false

}

function draw() {
  background( backgroundImg);
  
  Engine.update(engine);

  if(frameCount%5===0){
    snows.push(new Snowfall(random(10,1008),5,5));
  }
  for (var i = 0; i < snows.length; i++) {
    snows[i].display();   
  }
  
rectMode(CENTER);

stop.visible=false

if(gift.isTouching(stop)){
  gift.visible=false
  gift1.visible=true
}

textSize(20)
fill("TURQUOISE")
text("Press Down Arrow to give us our Christmas gift !",40,550)
  drawSprites();
  
}

function keyPressed(){

  if(keyCode === DOWN_ARROW){
   gift.velocityY=7
   santa.velocityX=-5
  } 
  
}
