var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png")
}

function setup() {
  createCanvas(600,200);
  
  
  //criar um sprite trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //criar um sprite ground (chão)
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //criando invisible ground (chão invisível)
  invisibleGround = createSprite(200,190,400,10); // adicionar <<<<<<<
  invisibleGround.visible = false;// adicionar <<<<<<<
  
}

function draw() {
  //definir cor de fundo
  background(220);
  
  console.log(trex.y)
  
  //pular quando a barra de espaço é pressionada
  if(keyWentDown("space") && trex.y >= 100) {// adicionar <<<<<<<
    trex.velocityY = -10;
  }
  
  //acrescentar gravidade
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //impedir trex de cair
  trex.collide(invisibleGround); // substituir <<<<<<<
  
  drawSprites();
}
