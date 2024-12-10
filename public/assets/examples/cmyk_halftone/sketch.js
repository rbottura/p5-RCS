let img, testpng, testtiff, testjpeg, testpdf; 

let justCyan, halftonedCyan, cyanFromRed
let justMagenta, halftonedMagenta, magentaFromGreen
let justYellow, halftonedYellow, yellowFromBlue
let justBlack, halftonedBlack

let justRed, justGreen, justBlue

function preload() {
  img = loadImage('./data/cmyk_testcolors.png');
  testpng = loadImage('./data/p5risotesttarget/EPE-P5RISO-Test-Target-RL-01.png');
  testjpeg = loadImage('./data/p5risotesttarget/EPE-P5RISO-Test-Target-RL-01.jpg');
  // testtiff = loadImage('./data/p5risotesttarget/EPE-P5RISO-Test-Target-RL-01.tif');
}
let mappedImages
let cnv
function setup() {
  angleMode(DEGREES)
  console.log('cmyk halftone')
  cnv = createCanvas(img.width*2, img.height*1);
  let skContainer = document.querySelector('#sketch-container')
  cnv.parent(skContainer)
  pixelDensity(1);

  cyanLayer = new Riso('PRINTCYAN');
  magentaLayer = new Riso('PRINTMAGENTA');
  yellowLayer = new Riso('PRINTYELLOW');
  blackLayer = new Riso('BLACK');

  mappedImages = extractMappedChannels(img, 0.05);
}


function draw() {
  clearRiso();
  background(255);
  let dotSpace = 4
  let seuil = 255 - 105
  let shape = 'circle'
  let ditherType = 'bayer'

  justCyan = extractCMYKChannel(testpng, "c"); //extract cyan from img
  justRed = extractRGBChannel(img, "red"); //extract cyan from img
  cyanFromRed = extractCMYKChannel(justRed, "c"); //extract cyan from img
  halftonedCyan = halftoneImage(justCyan, shape, dotSpace, 0, seuil);
  // let halftonedCyan = ditherImage(justCyan, ditherType, seuil);
  cyanLayer.fill(255)
  
  justMagenta = extractCMYKChannel(testpng, "m"); 
  justGreen = extractRGBChannel(img, "green"); 
  magentaFromGreen = extractCMYKChannel(justGreen, "m"); //extract magenta from img
  halftonedMagenta = halftoneImage(justMagenta, shape, dotSpace, 0, seuil);
  // let halftonedMagenta = ditherImage(justMagenta, ditherType, seuil*1);
  magentaLayer.fill(255)
  
  justYellow = extractCMYKChannel(testpng, "y");
  justBlue = extractRGBChannel(img, "blue"); 
  yellowFromBlue = extractCMYKChannel(justBlue, "yellow"); 
  halftonedYellow = halftoneImage(justYellow, shape, dotSpace, 0, seuil);
  // let halftonedYellow = ditherImage(justYellow, ditherType, seuil);
  yellowLayer.fill(255)

  justBlack = extractCMYKChannel(testpng, "black"); //extract magenta from img
  halftonedBlack = halftoneImage(justBlack, shape, dotSpace * dotSpace, 30, seuil);
  // let halftonedBlack = ditherImage(justBlack, ditherType, seuil);
  blackLayer.fill(255)

  // showSeparatesColors()
  // showSeparatesColorsFromRGB()
  showHalftonedCombinedColors()
  
  image(testpng, width/2, 0)
  drawRiso();
  // filter(THRESHOLD, .5)
  // blendMode(ADD)
  noLoop()
}


function showSeparatesColors(){
  cyanLayer.image(justCyan, 0, 0, width/4, height/2)
  cyanLayer.image(justMagenta, width/4, 0, width/4, height/2);
  cyanLayer.image(justYellow, 0, height/2, width/4, height/2);
  cyanLayer.image(justBlack, width/4, height/2, width/4, height/2); 
}

function showSeparatesColorsFromRGB(){
  cyanLayer.image(cyanFromRed, 0, 0, width/4, height/2)
  magentaLayer.image(magentaFromGreen, width/4, 0, width/4, height/2);
  yellowLayer.image(yellowFromBlue, 0, height/2, width/4, height/2);
  // blackLayer.image(justBlack, width/4, height/2, width/4, height/2); 
}

function showHalftonedCombinedColors(){
  cyanLayer.image(halftonedCyan, 0, 0)
  magentaLayer.image(halftonedMagenta, 0, 0);
  yellowLayer.image(halftonedYellow, 0, 0);
  // blackLayer.image(halftonedBlack, 0, 0);
}