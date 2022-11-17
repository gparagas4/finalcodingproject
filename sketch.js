myCounter = 220;
myRandom = 80;
let y = 0 
let speed = 3;
let isRed = false;
let isPurple = false;
let isBrown = false;

function setup() {
  createCanvas(1500,730);
  rectMode(CENTER);

}

function draw() {
  background("black");

  if (myCounter < myRandom) {
    fill("white")
  }else {
    fill("gold")
  }
  textSize(150);
  textFont('Times New Roman');
  text('VOTE', 250, 200);

  textSize (150);
  textFont('Times New Roman');
  text('NOW', 700, 200);

  textSize (150);
  textFont('Times New Roman');
  text('for', 450, 325);

  textSize (150);
  textFont('Times New Roman');
  text('the', 700, 325);

  textSize (150);
  textFont('Times New Roman');
  text('future', 210, 460);

  textSize (150);
  textFont('Times New Roman');
  text('of', 580, 460);

  textSize (150);
  textFont('Times New Roman');
  text('America', 720, 460);


  myCounter++
  if(myCounter >100){
    myCounter = 0
    myRandom = random(10,90);
  }
  //GREEN RED BOX 

  if(frameCount % 60 ==0){
    isRed = ! isRed;
  }

  if(isRed) {
    fill("Red");
  } else{
    fill("Green");
  }
  y+=speed;
  rect(width/2, y, 40, 40);

  if(y > height || y < 0) {
    speed*= -1;
  

  }
   // Brown White Circle  

   if(frameCount % 90 == 5){
    isBrown = ! isBrown;
  }

  if(isBrown) {
    fill("Brown");
  } else{
    fill("white");
  }
  y+=speed;
  rect(height/2, y, 50, 50);

  if(y > height || y < 0) {
    speed*= -1;
  }

}
