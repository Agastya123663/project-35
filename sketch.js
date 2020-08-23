//Create variables here
var dog , dogImg, dogHappy
var milk = 15;
var food = 20;
var weight = 20

function preload()
{
 dogImg = loadImage("images/dog.png");
 dogHappy = loadImage("images/happy.png");
}

function setup() {
  createCanvas(500, 500);
  
  dog = createSprite(200,300,10,10);
  dog.addImage("dog",dogImg);
  dog.scale = 0.2;
  
}


function draw() {
  textSize(20)
  fill("white");
  
  background(46,139,87);

  text("MILK BOTTLES : " + milk , 100,100);

  text("FOOD : " + food , 150,150);

  text("WEIGHT : " + weight , 350,130);

  text("If the dogs weight is more than 27 then he will die",50,450);

  text("press up arrow to feed milk and down arrow to feed food" , 3,50)


  if(keyWentUp(UP_ARROW)){
   milk = milk-1
   weight = weight + 0.5
   dog.addImage("dog",dogHappy);
  }

  

  if(keyWentUp(DOWN_ARROW)){
    food = food-1
    weight = weight + 1
  }

  if(weight === 27 || weight > 27){
   dog.visible = false;
   text("THE DOG DIED" , 150,300);
  }

  drawSprites();
  

}



