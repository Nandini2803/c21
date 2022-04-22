var car, carImg
var car1,car1Img;
var car2,car2Img;
var car3,car3Img;
var car4,car4Img;
var path,pathImg;
var coin,coinImg;
var coinCollection=0;
var gameOverImg,gameOver;
var gameState= "PLAY"

function preload(){
carImg =loadImage("car 0.png")
car1Img =loadImage("car 1.png") 
car2Img =loadImage("car 2.png")
car3Img =loadImage("car 3.png")
car4Img =loadImage("car 4.png")
pathImg = loadImage("Road.png");
coinImg = loadImage("coin.png");
gameOverImg = loadImage("gameOver.png")
}


function setup() {
 createCanvas(400,600);

path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;

car = createSprite(70,480,120,60);
car.addImage(carImg);
car.scale=0.3;
car.setCollider("rectangle",10,10,320,740);
car.debug=false;


coinG=new Group();
car1Group=new Group();
car2Group=new Group();
car3Group=new Group();
car4Group=new Group();
}

function draw() {

 if(gameState==="PLAY"){
  background(0);
  car.x = World.mouseX;
  
  edges= createEdgeSprites();
  car.collide(edges);

  if(path.y > 400 ){
    path.y = height/2;
  }
  spawnCars();
  spawnCars1();
  spawnCars2();
  spawnCars3();
  spawnCars4();
    if (coinG.isTouching(car)) {
      coinG.destroyEach();
      coinCollection=coinCollection+1;
    }  


    if (car1Group.isTouching(car)||(car2Group.isTouching(car))||(car3Group.isTouching(car)||(car4Group.isTouching(car)))){
     car1Group.destroyEach();
     gameState="end"; 
    }


    if (gameState==="end"){
      car.x=70;
      car.y=480;
      path.y=0;
      car2Group.destroyEach();
      car3Group.destroyEach();
      coinG.destroyEach();
      gameOver = createSprite(160,200,30,30)
     gameOver.addAnimation("gameOver",gameOverImg)
     gameOver.scale = 0.5;
    }
    
   
 drawSprites();
 textSize(20);
 fill(255);
 text("COINS: "+coinCollection,10,30);

 function spawnCars(){
  if (World.frameCount % 150 == 0) {
    var coin = createSprite(Math.round(random(50, 350),40, 10, 10));
    coin.addImage(coinImg);
    coin.scale=0.5;
    coin.debug=false;
    coin.velocityY = 3;
    coin.lifetime = 250;
    coinG.add(coin);
  }
  }
  var rand = Math.round(random(1,6));
  switch(rand) {
    case 1: spawnCars1;
            break;
    case 2: spawnCars2;
            break;
    case 3: spawnCars3;
            break;
    case 4: spawnCars4;
    default: break;
  }
  function spawnCars1() {
    if (World.frameCount % 227 == 0) {
    var car1 = createSprite(Math.round(random(50, 350),40, 10, 10));
    car1.addImage(car1Img);
    car1.scale=0.3;
    car1.setCollider("rectangle",20,5,300,650)
    car1.debug=false;
    car1.velocityY = 3;
    car1.lifetime = 250;
    car1Group.add(car1);
    }
    }
    function spawnCars2() {
    if (World.frameCount % 400 == 0) {
    var car2 = createSprite(Math.round(random(50, 350),40, 10, 10));
    car2.addImage(car2Img);
    car2.scale=0.2;
    car2.setCollider("rectangle",20,5,350,660)
    car2.debug=false;
    car2.velocityY = 3;
    car2.lifetime = 250;
    car2Group.add(car2);
    }
    }
    function spawnCars3() {
    if (World.frameCount % 630 == 0) {
    var car3 = createSprite(Math.round(random(50, 350),40, 10, 10));
    car3.addImage(car3Img);
    car3.scale=0.3;
    car3.setCollider("rectangle",20,5,350,660)
    car3.debug=false;
    car3.velocityY = 3;
    car3.lifetime = 250;
    car3Group.add(car3);
    }
    }
    
    function spawnCars4() {
    if (World.frameCount % 759 == 0) {
    var car4 = createSprite(Math.round(random(50, 350),40, 10, 10));
    car4.addImage(car4Img);
    car4.scale=0.3;
    car4.setCollider("rectangle",10,5,230,490)
    car4.debug=false;
    car4.velocityY = 3;
    car4.lifetime = 250;
    car4Group.add(car4);
    }
    }

}


 }


 
