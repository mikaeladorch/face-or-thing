
function setup(){
  createCanvas(400, 400);
  angleMode(DEGREES);
  
  mic = new p5.AudioIn();
  mic.start();
}

function draw(){
  background(182,252,213);
  noStroke();
  drawCenterPlanet(width * 0.0, height * 0.05, 0);
  drawPlanet(width * 0.19, height * -0.05, 5);
  drawPlanet(width * -0.19, height * 0.04, -5);
  drawTail();
  drawWings();
  drawBody();
  drawHead();
  drawDashes(85, 225, 65 + mouseX);
  drawDashes(315, 225, -65 + mouseX);
  

  console.log("mouse x is: " + mouseX);
  console.log("mouse y is: " + mouseY);
}

function drawCenterPlanet(xPos, yPos, rotation){
  //ViviWest
  //Cross
  push();
  beginShape();
  translate(xPos, yPos);
  rotate(rotation)
  fill(228,194,245)
  vertex(width * 0.49, height * 0.12);
  vertex(width * 0.505, height * 0.12);
  vertex(width * 0.505, height * 0.075);
  vertex(width * 0.49, height * 0.075);
  endShape();
  beginShape();
  vertex(width * 0.475, height * 0.09);
  vertex(width * 0.52, height * 0.09);
  vertex(width * 0.52, height * 0.1);
  vertex(width * 0.475, height * 0.1);
  endShape();
  //Planet
  fill(64,224,208);
  circle(width * 0.5, width * 0.17, width *0.11);
  fill(228,194,245);
  ellipse(width * 0.5, width * 0.17, width * 0.2, width * 0.011, width * 0.1);
  pop();
}

function drawPlanet(xPos, yPos, rotation){
  //ViviWest
  //Cross
  push();
  beginShape();
  translate(xPos, yPos);
  rotate(rotation)
  fill(204,145,255)
  vertex(width * 0.49, height * 0.12);
  vertex(width * 0.505, height * 0.12);
  vertex(width * 0.505, height * 0.075);
  vertex(width * 0.49, height * 0.075);
  endShape();
  beginShape();
  vertex(width * 0.475, height * 0.09);
  vertex(width * 0.52, height * 0.09);
  vertex(width * 0.52, height * 0.1);
  vertex(width * 0.475, height * 0.1);
  endShape();
  //Planet
  fill(64,224,208);
  circle(width * 0.5, width * 0.17, width *0.11);
  fill(204,145,255);
  ellipse(width * 0.5, width * 0.17, width * 0.2, width * 0.011, width * 0.1);
  pop();
}

function drawWings(){
  //Left Wing
  push();
  translate(130,160);
  rotate(-45);
  fill(144,220,255,170);
  stroke(158,227,240,170);
  ellipse(0, 0, 100, 170);
  pop();
  push();
  fill(144,220,255,170);
  stroke(158,227,240,170);
  circle(width * 0.375,width * 0.657,width * 0.25);
  pop();
  
//Right Wing
  push();
  translate(270,160);
  rotate(45);
  fill(144,220,255,170);
  stroke(158,227,240,170);
  ellipse(0, 0, 100, 170);
  pop();
  push();
  fill(144,220,255,170);
  stroke(158,227,240,170);
  circle(width * 0.627,width * 0.657,width * 0.25);
  pop();
}

function drawTail(){
   //LeftTail
  push();
  fill(64,224,208);
  beginShape();
  curveVertex(width * 0.5, height * 0.73);
  curveVertex(width * 0.485, height * 0.73);
  curveVertex(width * 0.48, height * 0.85);
  curveVertex(width * 0.43, height * 0.95);
  curveVertex(width * 0.5, height * 0.85);
  endShape(CLOSE);
  pop();
//RightTail
  push();
  fill(64,224,208);
  beginShape();
  curveVertex(width * 0.5, height * 0.73);
  curveVertex(width * 0.515, height * 0.73);
  curveVertex(width * 0.52, height * 0.85);
  curveVertex(width * 0.59, height * 0.95);
  curveVertex(width * 0.496, height * 0.85);
  endShape(CLOSE);
  pop();
}

function drawBody(){
  //Body
  push();
  fill(193,114,233);
  stroke(193,114,233);
  triangle(180, 223, 200, 255, 220, 223);
  triangle(180, 223, 200, 190, 220, 223);
  pop();
  push();
  fill(184,94,230);
  stroke(184,94,230);
  circle(width * 0.5, width * 0.66, width * 0.05);
  circle(width * 0.5, width * 0.71, width * 0.05);
  pop();
}

function drawHead(){
  //Head
  push();
  fill(202,134,236);
  stroke(202,134,236);
  circle(width * 0.5, width * 0.43, width * 0.1);
  pop();
  //left antenna  
  push();
  fill(228,194,245);
  stroke(228,194,245);
  translate(182.5,131.5);
  rotate(-20);
  rect(0, 0, 5, 25, 20);
  pop();
  //right antenna
  push();
  fill(228,194,245);
  stroke(228,194,245);
  translate(213,130);
  rotate(20);
  rect(0, 0, 5, 25, 20);
  pop();
}

function drawDashes(xPos, yPos, rotation = mouseX){//dash 
  push();
  fill(142,228,175);
  stroke(142,228,175);
  translate(xPos, yPos);
  rotate(rotation);
  rectMode(CENTER);
  rect(0, 0, 5, 25, 20);
  pop();
}