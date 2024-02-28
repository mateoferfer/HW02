const NUM_LINES = 20;
let t = 0;
let traceAlpha = 150;

function setup() {
  createCanvas(800, 800);
  // Set the background to the new specified color (10, 36, 52)
  background(10, 36, 52);
  colorMode(RGB, 255);
}

function draw() {
  // Set the background to the new specified color (10, 36, 52) each frame
  background(10, 36, 52);
  
  push();
  translate(width / 3, height / 2);
  // Set lines to the new first color (177, 102, 140) with thinner stroke
  drawLinesAndCircles(t, 3, traceAlpha, 177, 102, 140);
  pop();

  push();
  translate(2 * width / 3, height / 2);
  // Set lines to the new second color (238, 233, 238) with opposite direction and thinner stroke
  drawLinesAndCircles(-t, 3, traceAlpha, 238, 233, 238);
  pop();

  t += 0.2; // Decrease speed
}

function drawLinesAndCircles(localT, lineWeight, localAlpha, r, g, b) {
  strokeWeight(lineWeight);
  stroke(r, g, b, localAlpha);
  
  for (let i = 0; i < NUM_LINES; i++) {
    let offsetX = sin(localT / 10 + i / 5) * 50; // Additional complexity in x offset
    let offsetY = cos(localT / 10 + i / 5) * 50; // Additional complexity in y offset
    line(x1Pos(localT + i) + offsetX, y1Pos(localT + i) + offsetY, x2Pos(localT + i) + offsetX, y2Pos(localT + i) + offsetY);
  }
}

function x1Pos(t) {
  return sin(t / 10) * 100 + sin(t / 5) * 20;
}

function y1Pos(t) {
  return cos(t / 10) * 100;
}

function x2Pos(t) {
  return sin(t / 10) * 200 + sin(t) * 2;
}

function y2Pos(t) {
  return cos(t / 20) * 200 + cos(t / 2) * 20;
}
