let layer1;
let layer2;

let img;

function preload() {
  // load an image
  img = loadImage("data/no_threat.jpg");
}

function setup() {
  pixelDensity(1);

  // set canvas size to the same as image dimensions
  createCanvas(img.width, img.height);

  background(255);

  // create riso layers
  layer1 = new Riso("orange");
  layer2 = new Riso("green");

  // extract images for each riso layer
  // returns an array that is the same size as the number
  // of riso layers you've defined
  // first param is an image
  // second param is a "step": the lower the number the higher
  // the accuracy, but the slower the calculations
  let images = extractMappedChannels(img, 0.05);

  // draw images on the correct layers
  layer1.image(images[0], 0, 0);
  layer2.image(images[1], 0, 0);

  drawRiso();
}


document.getElementById('exportButton').addEventListener('click', function() {
    exportRiso();
});

