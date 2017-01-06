var stars = []
var speed;

function setup() {
  createCanvas(600, 600);
  for (var i = 0; i < 2000; i++) {
    stars[i] = new Star();
  }
}

function draw() {
  speed = map(mouseX, 0, width, 0, 20);
  background(0);
  translate(width/2, height/2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}

function Star() {
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.sc = random(width);  //scales the x and y coordinates
  
  this.psc = this.sc;
  
  this.update = function() {
    this.sc = this.sc - speed;
    if (this.sc < 1) {
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.sc = random(width);
      this.psc = this.sc;
    }
  }
  
  this.show = function() {
    fill(255);
    noStroke();
    
    var sx = map(this.x / this.sc, 0, 1, 0, width);
    var sy = map(this.y / this.sc, 0, 1, 0, height);
    
    var r = map(this.sc, 0, width, 12, 0)
    //ellipse(sx, sy, r, r);
    
    var px = map(this.x / this.psc, 0, 1, 0, width);
    var py = map(this.y / this.psc, 0, 1, 0, height);
    
    this.psc = this.sc;
    
    stroke(255);
    line(px, py, sx, sy);
  }
}