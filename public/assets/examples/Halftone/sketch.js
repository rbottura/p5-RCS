let pink;
let img;

function preload() {
  img = loadImage('data/monkeys.jpg');
}

let cnv
function setup() {
  cnv = createCanvas(400, 400);
  let skContainer = document.querySelector('#sketch-container')
  cnv.parent(skContainer)
  pixelDensity(1);

  pink = new Riso('fluorescentpink');
}

function draw() {
  background(220);

  clearRiso();

  let halftoned = halftoneImage(img, 'line', 3, 45, 90);

  pink.image(halftoned, 0, 0);

  drawRiso();
  
  noLoop()
}
