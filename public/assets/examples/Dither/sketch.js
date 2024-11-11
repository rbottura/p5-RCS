let black;
let img;
let ditherType = 'atkinson';

function preload() {
  img = loadImage('data/no_threat.jpg');
}

let cnv
function setup() {
  cnv = createCanvas(400, 400);
  let skContainer = document.querySelector('#sketch-container')
  cnv.parent(skContainer)
  pixelDensity(1);

  black = new Riso('black');
}

function draw() {
  background(220);

  let threshold = map(mouseX, 0, width, 0, 255);

  clearRiso();

  let dithered = ditherImage(img, ditherType, threshold);
  black.image(dithered, 0, 0);

  drawRiso();
}

function keyReleased() {
  if (key == 1) ditherType = 'atkinson';
  else if (key == 2) ditherType = 'floydsteinberg';
  else if (key == 3) ditherType = 'bayer';
  else if (key == 4) ditherType = 'none';
}