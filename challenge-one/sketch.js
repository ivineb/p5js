
function setup() {
  createCanvas(1920, 1080);
 }
 function draw() {
  if (mouseIsPressed) {
  fill(50);
  ellipse(mouseX, mouseY, 80, 80);
  } else {
  fill(0);
  }
 }
 