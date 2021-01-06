//Create variables here
var dig,hdog,dogI,dogImg,database,foodS,foodStock;

function preload()
{
 
  dogImg=loadImage("dogImg.png");
  dog1Img=loadImage("dogImg1.png")
	//load images here
}

function setup() {
  createCanvas(500,500);
  database=firebase.database();
  foodStock=database.ref('food').on('value',readStocks);
  dog=createSprite(250,200);
  dog.addImage(dogImg)
dog.scale=0.1;

}


function draw() { 
  background(46, 139, 87) ;
  text("click up arrow to feed drago milk",200,200);
  if(keyWentDown(UP_ARROW)){
   writeStock(foodS);
  
   dog.addImage(dog1Img);
  }
  

  drawSprites();
  //add styles here

}
function readStocks(data){

foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x=x-1;
  }
  database.ref('/').update({
    food:x
  })

}



