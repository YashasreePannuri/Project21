var wall,bullet;
var speed,weight,thickness;
var collision;

function setup() {
  createCanvas(1400,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet= createSprite(200, 200, 50, 20);
  bullet.shapeColor = "white"
  bullet.velocityX = speed;
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (80,80,80);

}

function draw() {
  background(0, 138, 230);  
  if(hasCollied(bullet,wall)){
    bullet.velocityX=0
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor=color(255,0,0);
   }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
   }
 }

  drawSprites();
}

function hasCollied(lbullet,lwall){
  bulletRightEdge=bullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true;
  }else{
    return false;
 }
}