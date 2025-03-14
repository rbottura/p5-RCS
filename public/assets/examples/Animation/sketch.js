let blue;
let red;

console.log('animation sketch')

var redx = new Array(1000);
var redy = new Array(1000);

var bluex = new Array(1000);
var bluey = new Array(1000);

let cnv 
function setup() {
  cnv = createCanvas(400, 400);
  console.log(document.querySelector('#sketch-container'))
  let skContainer = document.querySelector('#sketch-container')
  cnv.parent(skContainer)
  // cnv.parent('#sketch-container')
  red = new Riso('red');
  for (var i = 0; i < 100; i++) {
    redx[i] = random(width);
    redy[i] = random(height);
  }

  blue = new Riso('blue');
  for (var i = 0; i < 100; i++) {
    bluex[i] = random(width);
    bluey[i] = random(height);
  }
}

function draw() {
  background(255, 255, 255, 100);
  clearRiso();

  red.fill(255);
  blue.fill(255);

  for (var i = 0; i < 100; i++) {
    red.ellipse(redx[i], redy[i], 5, 5);
    redx[i] += random(-5, 5);
    redy[i] += random(-5, 5);
  }

  for (var i = 0; i < 100; i++) {
    blue.ellipse(bluex[i], bluey[i], 5, 5);
    bluex[i] += random(-5, 5);
    bluey[i] += random(-5, 5);
  }

  drawRiso();
  // exportRiso();
}