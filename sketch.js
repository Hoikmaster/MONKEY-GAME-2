function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 80);
  movingRect = createSprite(500,200,80,50);

  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
}

function draw() {
  background(255,255,255);  

  movingRect.y=mouseY;
  movingRect.x=mouseX;

  if (movingRect.x-fixedRect.x <= fixedRect.width/2+movingRect.width/2 && 
     fixedRect.x-movingRect.x <= fixedRect.width/2+movingRect.width/2  && 
     movingRect.y-fixedRect.y <= fixedRect.height/2+movingRect.height/2 && 
     fixedRect.y-movingRect.y <= fixedRect.height/2+movingRect.height/2) {
    
      fixedRect.shapeColor="blue";
      movingRect.shapeColor="blue";

  } else {
    
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";

  }

  drawSprites();
}