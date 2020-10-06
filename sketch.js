var bullet, wall;
var speed, weight, thickness;
function setup() {
  createCanvas(1600, 400);
  speed = random (223, 321);
  weight = random (30, 52);
  thickness = random (22, 83);
  bullet = createSprite(200, 200, 30, 10);
  wall = createSprite(1200, 200, thickness, 200);
}

function draw() {
  background("black"); 
  wall.shapeColor = color(80, 80, 80);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";
  
  if(isTouching(wall, bullet)){
    bullet.velocityX = 0;
    var damage = 0.5* weight * speed * speed/ thickness * thickness * thickness;
    console.log(damage);
    if (damage>10){
      bullet.shapeColor = color("red");
    }
    if(damage<10){
      bullet.shapeColor = color("green");
    }
    console.log(damage);
  }
  bullet.collide(wall);
  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}