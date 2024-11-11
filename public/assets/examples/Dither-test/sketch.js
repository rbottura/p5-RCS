let black;
let img;
let s = 200; //image size

function preload() {
  img = loadImage('rosa.jpg');
}

let cnv
function setup() {
  cnv = createCanvas(400, 400);
  let skContainer = document.querySelector('#sketch-container')
  cnv.parent(skContainer)
  pixelDensity(1);
  black = new Riso('black', 11 * 150, 8 * 150); //new riso object
}


function draw() {

  for (var x = 1; x < 5; x = x + 1) { //iterate through each image
    for (var y = 0; y < 5; y = y + 1) {
      ditherTypes(x); //custom function to set dither types for each column
      let dithered = ditherImage(img, ditherType, y * 50); //dither image
      black.image(dithered, x * s, (black.height - 300) - y * s, s, s); //place it on black riso object
      if (x == 1) {  //draw numbers next to first column of images
        black.text(y * 50, x * s - 25, (black.height - 300) - y * s + 100, s, s);

      }
    }
  }

  //text labels
  black.text('atkinson', 200, 90);
  black.text('floydsteinberg', 400, 90);
  black.text('bayer', 600, 90);
  black.text('none', 800, 90);
  
  drawRiso(); 
  noLoop();
}

// exportRiso();

//custom function to set dither types with number
function ditherTypes(x) { 
  if (x == 1) ditherType = 'atkinson';
  else if (x == 2) ditherType = 'floydsteinberg';
  else if (x == 3) ditherType = 'bayer';
  else if (x == 4) ditherType = 'none';
}