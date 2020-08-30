var towerImg, tower;
var climberImg, climber,climberGroups;
var ghost,ghost_jumping, ghost_standing;
var doorGroups,door;
var spooky;
var invisibleBlock,invisbleBlockGroup;
gameState = "play";

function preload(){
towerImg = loadImage("tower.png");
doorImg = loadImage("door.png");
climberImg = loadImage("climber.png");
ghostImg = loadImage("ghost-standing.png");
spookySound = loadSound("spooky.wav");
}

function setup(){
createCanvas(600,600);
tower = createSprite(300,300);
tower.addImage(tower,"tower.png");
tower.velocityY = 2;

doorGroups = newGroup;
climberGroups = newGroup;
invisibleBlockGroup = newGroup;

ghost = createSprite(200,200,30,60);
ghost.addImage(ghost,"ghost.Img");
ghost.velocityY = 3;
}

function draw(){
background("white");
  if(keydown(left_arrow)){
      ghost.velocityX = 3
  }
      
  if(keydown(right_arrow)){
  ghost.velocityX =-3
  }
  
  if(keydown(space)){
  ghost.velocityY = -5
  }
  
  //given gravity
  ghost.velocityY = ghost.velocityX+0.8;

  if(tower.y > 400){
  tower.y = 300
  }
  
 spawnDoors ();
 
 if(climbersGroup.isTouching(ghost)){
 ghost.velocityY = 0;
 ghost.velocityX = 0;
 }
 
 if(invisibleBlocksGroup.isTouching(ghost)){
    ghost.destroy();
    gamestate = END;
 }
 drawSprites();
 }
 
 function