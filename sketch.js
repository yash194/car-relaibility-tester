var deformation, car,wall,speed,weight;



function setup() {
  createCanvas(1500,400);
  car=createSprite(40, 200, 50, 50);
  speed=random(55,90);
  weight=random(400,1500);
  car.velocityX=speed;
   deformation=0.5*weight*speed*speed/22500;
wall=createSprite(1400,200,40,height/2);

}

function draw() {
  background(0,0,0);  

if(wall.x-car.x<(car.width+wall.width)/2){

car.velocityX=0;

if(deformation<100){
 
 car.shapeColor=color(0,255,0);

}

if(deformation>100 && deformation<180){
  car.shapeColor=color(230,230,0);

}


if(deformation>180){
  car.shapeColor=color(255,0,0);
}

}

  drawSprites();
  textSize(30);
  fill(255,0,0);
  text("velocity-"+Math.round(car.velocityX),400,350);
  text("deformation-"+Math.round(deformation),700,350);
}