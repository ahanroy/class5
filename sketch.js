var garden,rabbit;
var gardenImg,rabbitImg;
var apple,orangeleaf,leaf,redleaf
var appleImg,orangeleafImg,leafImg,redImg
var r

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  orangeleafImg = loadImage("orangeLeaf.png") 
  leafImg = loadImage("leaf.png")
  redImg = loadImage("redImage.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  rabbit.x=World.mouseX

  edges= createEdgeSprites();
  rabbit.collide(edges);
 
 r=Math.round(random(1,4)) 
if(r===1){
spawnapple()
}
else if(r===2){
  spawnorangeLeaf()
}
else if(r===3){
  spawnleaf()
}
else {
  spawnredleaf()
}

  drawSprites();
}

function spawnapple(){
  if(frameCount%80==0){
apple=createSprite(random(50,350),40,10,10)
apple.addImage("Moving",appleImg)
apple.scale=0.07
apple.velocityY=3
  }
}

function spawnorangeLeaf(){
  if(frameCount%80==0){
orangeLeaf=createSprite(350,40,10,10)
orangeLeaf.addImage("Moving",orangeleafImg)
orangeLeaf.scale=0.08
orangeLeaf.velocityY=3
orangeLeaf.y=Math.round(random(10,60))
  }
}

function spawnleaf(){
  if(frameCount%80==0){
  leaf=createSprite(random(50,350),40,10,10)
  leaf.addImage("Moving",leafImg)
  leaf.scale=0.05
  leaf.velocityY=3
  }
  }

  function spawnredleaf(){
    if(frameCount%80==0){
    redleaf=createSprite(random(50,350),40,10,10)
    redleaf.addImage("Moving",redImg)
    redleaf.scale=0.06
    redleaf.velocityY=3
    }
    }


















