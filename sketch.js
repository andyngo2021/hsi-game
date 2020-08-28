let screen_width = 1000, screen_height = 600;

function setup() {
  createCanvas(screen_width, screen_height);
  background(0);
  
}

function draw() {
  let pos = createVector(width/2,height/2);
  let mouse = createVector(mouseX, mouseY);
  let v = p5.Vector.sub(mouse,pos);
  
  translate(width/2, height/2);
  
  strokeWeight(4);
  stroke(255, 50);
  line(0,0, v.x, v.y);
  
}