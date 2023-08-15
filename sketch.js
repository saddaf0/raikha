var girl ;
var girlRunning;
var backgroundImage
var rockImage
var invisibeGround

var rocksGroup
var girlFall

var resetImage
var resetButton
var gameState="play"
function preload(){

backgroundImage=loadImage("candy-land-landscape.jpg")
girlRunning=loadAnimation("girl1run.png","girl2run.png","girl3run.png")
rockImage=loadImage("images-removebg-preview.png")
girlFall=loadAnimation("girl+fall2-removebg-preview.png")

resetImage=loadImage("reset.png")
}

function setup() {
createCanvas(1200,600)

girl=createSprite(100,480,10,10);
girl.addAnimation("running",girlRunning)
girl.addAnimation("hello",girlFall)
girl.scale=0.7

invisibeGround=createSprite(600,590,1200,20);
invisibeGround.visible=false

resetButton=createSprite(600,300)
resetButton.addImage("r",resetImage)
resetButton.scale=0.5
resetButton.visible=false

rocksGroup = new Group() 
}

function draw() {
 background(backgroundImage)

 if(gameState==="play"){

    if(keyDown("up") && girl.y>471){
    girl.velocityY=-20
 }
 //score+=1
 girl.velocityY+=1

 if(girl.isTouching(rocksGroup)){
    gameState="end"
  
}

 rocks()


 }

 if(gameState==="end"){
    resetButton.visible=true
    girl.changeAnimation("hello");
    rocksGroup.setVelocityXEach(0)
if(mousePressedOver(resetButton)){
    reset()
}
 }
 

girl.collide(invisibeGround)

console.log(girl.y)


 drawSprites()

}

function rocks(){
 
    if(frameCount % 100 ===0){
var rock= createSprite(1200,550,20,20);
rock.addImage("rock",rockImage);
rock.velocityX=-6
rock.lifetime=1500;
rock.scale=0.5
rocksGroup.add(rock)
    }

}

function reset(){
    gameState="play"
    girl.changeAnimation("running"); 
    rocksGroup.destroyEach()
    resetButton.visible=false
}