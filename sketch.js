var ball,ballImage,paddleImage,paddle,gameState
var score=0;

function preload() {
  /* preload your images here of the ball and the paddle */
  ballImage=loadImage("ball.png");
  paddleImage=loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  /* assign the images to the sprites */
  ball=createSprite(200,200,10,10);
  ball.addImage(ballImage);
  ball.scale=0.6;
  paddle=createSprite(380,200 ,20,80);
  paddle.addImage(paddleImage);
  paddle.scale=0.8;
  
  gameState="preview";
  /* give the ball an initial velocity of 9 in the X direction */
}

function draw() {
  background("yellow");
  text("Score="+score,70,100);
 /* create Edge Sprites here */
  edges=createEdgeSprites();
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */
  if(keyDown("space")&&gameState==="preview"){
    ball.velocityX=Math.round(random(7,9));
    ball.velocityY=Math.round(random(4,6));
    gameState="play";
  }
  ball.bounceOff(paddle);
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  if(ball.isTouching(paddle)){
    score=score+1;
  }
  
  paddle.collide(edges);
  
  if(keyDown(UP_ARROW)&&gameState==="play")
  {
   paddle.y=paddle.y-10;  /* what should happen when you press the UP Arrow Key */
  }
  
  if(keyDown(DOWN_ARROW)&&gameState==="play")
  {
   paddle.y=paddle.y+10; /* what should happen when you press the UP Arrow Key */
  }
  if(ball.x>400){
    paddle.y=200;
    text("GAME OVER",150,200);
    gameState="end";
   // text("PRESS ENTER TO RESTART",100,300);
  }
  /*if(gameState==="end"&&keyDown(ENTER)){
    gameState==="preview";
    ball.velocityY=0;
    ball.velocityX=0;
    ball.x=200;
    ball.y=200;
    score=0;
    if(keyDown("space")){
    ball.velocityX=Math.round(random(7,9));
    ball.velocityY=Math.round(random(4,6));
    gameState="play";
  }*/
    
  
  
  drawSprites();
}


function randomVelocity()
{
   
  if(frameCount%200===0){
     ball.velocityY=Math.round(random(ball.velocityY+1,ball.velocityY+3));
    ball.velocityX=Math.round(random(ball.velocityX,ball.velocityX+3));
     }

}

