var dog,sadDog,happyDog;
var feedPet,addFood;
var foodObj;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happydog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feedPet=createButton("Feed the dog");
  feedPet.position(700,95);
  feedPet.mousePressed(feedPet);

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFood)

//foodObj=new Food();
 

}


function draw() {
  background(46,139,87);
  drawSprites();
  //foodObj.display();
}

//function to read food Stock


//function to update food stock and last fed time

//function to add food in stock

