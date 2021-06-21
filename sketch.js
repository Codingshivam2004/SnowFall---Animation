var snow;
var background;
var boy;
var snowImg,backgroundImg;


function preload(){
  snowImg = loadImage("snow4.webp")
  backgroundImg = loadImage("snow3.jpg");
}
function setup() {
  createCanvas(800,400);
  var background = createSprite(400,200,400,200);
background.addImage(backgroundImg);
  
  var snow = createSprite(400,100,30,30);
  snow.addImage(snowImg);
snow.scale = 0.2;

  
}

function draw() {
  background(255,255,255);  
  drawSprites();
}