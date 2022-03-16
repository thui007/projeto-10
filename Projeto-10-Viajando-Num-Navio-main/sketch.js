var sea,ship;
var seaImg,shipImg;

function preload(){
  seaImg = loadImage("space-1451654_960_720.webp");
  shipImg1 = loadImage("png-transparent-dwayne-johnson-the-rock-dwayne-johnson-d-generation-x-professional-wrestling-the-rock-hand-sports-arm.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Plano de fundo móvel
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.3;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.15;
  
}

function draw() {
  background(0);
  sea.velocityX = -3;

  
  //código para redefinir o plano de fundo
  if(sea.x < 0){
    sea.x = sea.width/8;
  }
    
  drawSprites();
}
