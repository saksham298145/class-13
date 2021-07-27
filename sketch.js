var trex, trex_running, trex_collided;

var ground, invisibleGround, groundImage;

var cloud,cloudImage

var obstacles,obstaclesImage1,obstaclesImage2,obstaclesImage3,obstaclesImage4,obstaclesImage5,obstaclesImage6
var score

function preload() {

trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");

trex_collided = loadImage("trex_collided.png");

groundImage = loadImage("ground2.png")

cloudImage= loadImage("cloud.png")

obstaclesImage1= loadImage("obstacle1.png")
obstaclesImage2= loadImage("obstacle2.png")
obstaclesImage3= loadImage("obstacle3.png")
obstaclesImage4= loadImage("obstacle4.png")
obstaclesImage5= loadImage("obstacle5.png")
obstaclesImage6= loadImage("obstacle6.png")
}
function setup() {

createCanvas(600, 200);

//create a trex sprite

trex = createSprite(50,160,20,50);


trex.addAnimation("running", trex_running);

trex.scale = 0.5;

//create a ground sprite

ground = createSprite(200,180,400,20);

ground.addImage("ground",groundImage);

ground.x = ground.width /2;

ground.velocityX = -4;

//invisible ground

invisibleGround=createSprite(200,190,400,10)

score=0
invisibleGround.visible=false
}
function draw() {

background(rgb(255,165,0));

text ("score:"+score,120,10)
score=score+Math.round(frameCount/90)
//jump when the space button is pressed

if (keyDown("space") && trex.y>=120) {

trex.velocityY = -10;

}

trex.velocityY = trex.velocityY + 0.8

if (ground.x < 0) {

ground.x = ground.width / 2;

}

trex.collide(invisibleGround);

spawnClouds()
spawnObstacles()

drawSprites();



//console.log(frameCount)

}

function spawnClouds(){

   
         if (frameCount%100===0){

    

        cloud=createSprite(600,100,40,10)
        
        cloud.addImage("cloud",cloudImage)
        
        cloud.scale=0.3
        
        
        cloud.velocityX=-4
        
        cloud.y=Math.round(random(10,70))
        
        cloud.depth=trex.depth
        
        trex.depth=trex.depth+1
      cloud.lifetime=170  

    }

}
function spawnObstacles(){
    if (frameCount%60===0){
        obstacles=createSprite(600,165,10,40)
        
        obstacles.velocityX=-4
        var r=Math.round(random(1,6))
        switch (r){
          case 1:obstacles.addImage(obstaclesImage1)
          break
          case 2:obstacles.addImage(obstaclesImage2)
          break
          case 3:obstacles.addImage(obstaclesImage3)
          break
          case 4:obstacles.addImage(obstaclesImage4)
        break
        case 5:obstacles.addImage(obstaclesImage5)
          break
          case 6:obstacles.addImage(obstaclesImage6)
          break
          default:break
        }
        obstacles.scale=0.1
      obstacles.lifetime=150


    
    
    


    }
  }