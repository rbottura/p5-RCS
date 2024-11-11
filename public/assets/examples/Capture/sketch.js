let blue;
let red;
let capture; // this is the video camera

let cnv
function setup() {
  cnv = createCanvas(400, 400);
  let skContainer = document.querySelector('#sketch-container')
  cnv.parent(skContainer)
  
  pixelDensity(1);

  // create riso channels
  red = new Riso('red');
  blue = new Riso('blue');

  // start and hide camera
  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();

  frameRate(10);
}

function draw() {
  background(255);

  // clear riso layers
  clearRiso();

  // extract the red ang blue channels
  let reds = extractRGBChannel(capture, 'red');
  let blues = extractRGBChannel(capture, 'blue');

  // draw the blue pixels on the blue channel
  // and red pixels on the red channel
  blue.image(blues, 0, 0);
  red.image(reds, 0, 0);

  // remove overlapping pixels
  blue.cutout(red);

  // draw all riso layers
  drawRiso();
}