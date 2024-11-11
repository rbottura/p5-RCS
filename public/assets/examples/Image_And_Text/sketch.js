let blue, red;
let img;

function preload() {
  img = loadImage('data/claire.jpg');
}

let cnv
function setup() {
  cnv = createCanvas(400, 400);
  let skContainer = document.querySelector('#sketch-container')
  cnv.parent(skContainer)
  pixelDensity(1);
  blue = new Riso('blue');
  red = new Riso('red');
  noLoop();
}

function draw() {
  background(255);

  clearRiso();

  let reds = extractRGBChannel(img, "red");
  let blues = extractRGBChannel(img, "blue");

  blue.imageMode(CENTER);
  red.imageMode(CENTER);

  blue.image(blues, width / 2, height / 2, img.width / 2, img.height / 2);
  red.image(reds, width / 2, height / 2, img.width / 2, img.height / 2);


  let textGraphic = createGraphics(width, height);
  textGraphic.fill(0);
  textGraphic.textStyle(BOLD);
  textGraphic.textFont('Helvetica');
  textGraphic.textAlign(CENTER, CENTER);
  textGraphic.textSize(80);
  textGraphic.text('ABOLISH', width * 0.5, height * 0.7);

  blue.cutout(textGraphic);

  drawRiso();
}

// exportRiso();