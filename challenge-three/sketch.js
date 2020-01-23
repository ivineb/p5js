let size = prompt("howdy, choose the circle size. (for a fun experience try 500, and click while dragging!)")

function setup() {
  createCanvas(1920, 1080);
 }

 function draw() {
  if (mouseIsPressed) {
    fill(0, 0, 255, 160);
    
  } else {
    fill(0, 0, 128, 128);
  }
  ellipse(mouseX, mouseY, size, size);

 }
 