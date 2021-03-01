class Food{
    constructor(){

        this.image=loadImage("Images/Milk.png");

        var foodStock;
    }
    
display(){
    var x=80,y=100;
    imageMode(CENTER);
    image(this.image,720,220,70,70);
    
    if(this.foodStock!=0){
    for(var i=0;i<this.foodStock;i++){
    if(i%10==0){
    x=80;
    y=y+50;
    }
    image(this.image,x,y,50,50);
    x=x+30;
    }
    }



}



}
function feedPet(){

    if (foodObj.getFoodStock()<=0){
        foodObj.updateFoodStock(foodObj.getFoodStock()*0);
    }else{
        foodObj.updateFoodStock(foodObj.getFoodStock()-1);
    }
    }

    function addFood(){
  foodStock++;
  database.ref("/").update({
     Food:foodStock
  })
  }
   