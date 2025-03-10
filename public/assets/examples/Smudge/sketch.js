let blue, red, yellow;

let cnv
function setup() {
  cnv = createCanvas(400, 400);
  let skContainer = document.querySelector('#sketch-container')
  cnv.parent(skContainer)
  // create an 8.5x11 canvas at 150dpi
  pixelDensity(1);

  // create 3 riso layers
  yellow = new Riso('yellow');
  blue = new Riso('blue');
  red = new Riso('red');
}

function draw() {
  let s = 100;
  background(255);

  blue.noStroke();
  red.noStroke();
  yellow.noStroke();

  for (let x = 140; x < width - 140; x = x + 140) {
    for (let y = 140; y < height - 140; y = y + 140) {
      blue.fill(map(y, 0, height, 20, 220));
      blue.ellipse(
        x + random(-20, 20),
        y + random(-20, 20),
        s + random(-20, 20),
        s + random(-20, 20)
      );
      red.fill(map(x, 0, width, 20, 220));
      red.ellipse(
        x + random(-20, 20),
        y + random(-20, 20),
        s + random(-20, 20),
        s + random(-20, 20)
      );
      yellow.fill(map(x, 0, width, 220, 20));
      yellow.ellipse(
        x + random(-20, 20),
        y + random(-20, 20),
        s + random(-20, 20),
        s + random(-20, 20)
      );
    }
  }

  // make a small text graphic and cut it out of the image
  let textGraphic = createGraphics(width, height);
  textGraphic.fill(0);
  textGraphic.textStyle(BOLD);
  textGraphic.textFont('Helvetica');
  textGraphic.textAlign(CENTER, CENTER);
  textGraphic.textSize(20);
  textGraphic.text("ABOLISH", mouseX, mouseY);

  red.cutout(textGraphic);
  blue.cutout(textGraphic);
  yellow.cutout(textGraphic);

  drawRiso();
}

// exportRiso();