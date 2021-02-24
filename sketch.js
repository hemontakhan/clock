

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background("black"); 
  translate(200,200);
  rotate(-85);

  var hr = hour();
  var mn = minute();
  var sc = second();

  stroke(255,0,255);
  strokeWeight(3);
  noFill();
  var sAngle = map(sc,0,60,0,360);
  arc(0,0,200,200,0,sAngle);

  push();
  rotate(sAngle)
  stroke(255,0,255);
  line(0,0,100,0);
  pop();

  stroke(255,0,0);
  strokeWeight(3);
  noFill();
  var mnAngle = map(mn,0,60,0,360);
  arc(0,0,220,220,0,mnAngle);
  console.log("hour :"+ hr + " minute : "+ mn + " second :" + sc);

  push();
  rotate(mnAngle)
  stroke(255,0,0);
  line(0,0,75,0);
  pop();

  stroke(150,255,90);
  strokeWeight(3);
  noFill();
  var hAngle = map(hr % 12,0,12,0,360);
  arc(0,0,240,240,0,hAngle);


  push();
  rotate(hAngle)
  stroke(150,255,90);
  line(0,0,50,0);
  pop();

  drawSprites();
}