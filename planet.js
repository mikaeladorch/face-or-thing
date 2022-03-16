class Planet {
  constructor(_xPos, _yPos, _rotation, _size) {
    this.xPos = _xPos;
    this.yPos = _yPos;
    this.rotation = _rotation;
    this.size = _size
  }

  display () {
  //ViviWest
  //Cross
  push();
  beginShape();
  translate(this.xPos, this.yPos);
  rotate(this.rotation)
  scale(this.size);
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

  move(){

   this.rotation++;
    if (this.yPos <=height * 1.05){
    this.yPos += 2;
    } else {
      this.yPos = -height * 0.05;
    }
  }
}
//function drawPlanet(xPos, yPos, rotation){
  //ViviWest
  //Cross
  //push();
  //beginShape();
  //translate(xPos, yPos);
  //rotate(rotation)
  //fill(204,145,255)
  //vertex(width * 0.49, height * 0.12);
  //vertex(width * 0.505, height * 0.12);
  //vertex(width * 0.505, height * 0.075);
  //vertex(width * 0.49, height * 0.075);
  //endShape();
  //beginShape();
  //vertex(width * 0.475, height * 0.09);
  //vertex(width * 0.52, height * 0.09);
  //vertex(width * 0.52, height * 0.1);
  //vertex(width * 0.475, height * 0.1);
  //endShape();
  //Planet
  //fill(64,224,208);
  //circle(width * 0.5, width * 0.17, width *0.11);
  //fill(204,145,255);
  //ellipse(width * 0.5, width * 0.17, width * 0.2, width * 0.011, width * 0.1);
  //pop();
//}
