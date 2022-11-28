myCounter = 220;
myRandom = 80;
let y = 0 
let speed = 3;
let isRed = false;
let isPurple = false;
let div;


function setup() {
  createCanvas(1100, 1000);
  angleMode('DEGREES');
  angleMode
   //vote now text
   div = createDiv("VOTE NOW")
   div.class('neonText')
   div.style("font-size", "100px")
   div.position(1250, 100)

     //vote now text
    div = createDiv("FOR THE FUTURE")
    div.class('neonText')
    div.style("font-size", "100px")
    div.position(1100,1200)

    //clock 
   translate(1000, 1000);
   rotate(-90);
     let hr = hour();
     let mn = minute();
     let sc = second();
     
     fill(255);
     noStroke();
     text(hr +':'+ mn + ':' +sc, 10,200);
     
 
     strokeWeight(80);
     stroke(255, 100, 150);
     noFill();
     let secondAngle = map(sc, 0, 59, 0, 360); 
     arc (0, 0, 1800,1800, 0, secondAngle);
 
     stroke(150, 100, 255);
     let minAngle = map(mn, 0, 59, 0, 360);
     arc(0, 0, 1600, 1600, 0, minAngle);
 
     stroke(150, 255, 100);
     let hourAngle = map(hr % 12, 0, 12, 0, 360); 
     arc (0, 0, 1400, 1400, 0, hourAngle);


}
function draw() {
  background("black");





}
