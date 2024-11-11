// public/assets/examples/example1.js
let canv
// Setup function for p5
function setup() {
  canv = createCanvas(400, 400);
  canv.parent('#sketch-container') 
  console.log('zaeza')
  background(200);
  textSize(32);
  fill(50);
  text('Hello, p5-RCS!', 50, 50);
}

// Draw function for p5
function draw() {
  background(200);
  // console.log(canvas.parent()); // Attach canvas to a container element
  text('Hello, p5-RCS!', 50, 50);
}

window.setup = setup;
window.draw = draw;