let s_width = 1000, s_height = 600;
let philipImg;



function setup() {
  createCanvas(s_width, s_height);
  background(0);
  philipImg = loadImage('Game Files/Images/Backgrounds/philip_bg.png');
  // Loading in Images
  
}

function draw() {
	image(philipImg, 0, 0);
}