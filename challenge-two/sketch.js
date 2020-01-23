

function setup() {
  createCanvas(1920, 1080);
 }

 function draw() {
  if (mouseIsPressed) {
    fill(0, 0, 255, 160);
    ellipse(mouseX, mouseY, 80, 80);
  
  } else {
    fill(255, 50, 0, 160);
    square(mouseX, mouseY, 60);
  }

 }
 