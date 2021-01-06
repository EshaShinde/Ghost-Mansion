var cross, background;
var Sofy;

var crossImg, bgImg, MrBindraImg, MrsMariaImg
var RimaImg, RohanImg, SofyImg

var x, y
var ghost

PLAY = 1
END = 0
var gameState = PLAY


var ghostGroup

function preload(){
  crossImg = loadImage("Images/Cross.png")
  bgImg = loadImage("Images/H1.jpg")
  MrBindraImg = loadImage("Images/MrBindra.png")
  MrsMariaImg = loadImage("Images/Maria.png")
  RimaImg = loadImage("Images/Rima.png")
  RohanImg = loadImage("Images/Rohan.png")
  SofyImg = loadImage("Images/Sofy.png")

}

function setup() {

  createCanvas(800,800);

  Sofy = createSprite(400,700, 30,60)
  Sofy.addImage(SofyImg)
  Sofy.scale = 0.1
  
  cross = createSprite(Sofy.x +4, Sofy.y-2, 10, 20)
  cross.scale = 0.3
  cross.addImage(crossImg)

  ghostGroup = new Group();
  
}

function draw() {
  background(bgImg);  
  
  if(gameState === PLAY){
if(keyDown("UP_ARROW")){
  Sofy.y -=2
  cross.y -=2
}

if(keyDown("DOWN_ARROW")){
  Sofy.y +=2
  cross.y +=2
}

if(keyDown("RIGHT_ARROW")){
  Sofy.x +=2
  cross.x +=2.1
}

if(keyDown("LEFT_ARROW")){
  Sofy.x -=2
  cross.x -=2.1
}

//if(keyDown("space")){
  //createCross();
//}

spawnGhost();

if(ghostGroup.isTouching(Sofy)){
  ghostGroup.destoryEach();
    gameState = END;
}

  }
  else if ( gameState === END){

   // ghostGroup.destoryEach();
console.log("GAME ENDED!")
  }
  drawSprites();
}

function spawnGhost(){
x = (random(200,800))
y = (random(200,800))

if(frameCount %200===0){
  ghost = createSprite(x,y,30,50)
// ghost.addImage(MrBindraImg)
 ghost.scale = 0.4;

 var rand = Math.round(random(1,4));

  switch(rand){
    case 1 : ghost.addImage(MrsMariaImg)
    break;
    case 2 : ghost.addImage(MrBindraImg)
    break;
    case 3 : ghost.addImage(RimaImg)
    break;
    case 4 : ghost.addImage(RohanImg)
    break; 
    default: break;
    
  }
  ghostGroup.add(ghost)
ghost.lifetime = 300;

}}

//function createCross(){
  
 // return cross
//}

// Concept of Gamestate
// Attaching cross to sofy's hand
// adding a condition to kill ghost
// score 

