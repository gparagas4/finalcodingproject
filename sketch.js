myCounter = 220;
myRandom = 80;

function setup() {
  createCanvas(1500,730);
}

function draw() {
  background("black");
  if (myCounter < myRandom) {
    fill(220)
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
  
}


