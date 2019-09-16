var bubbles = [];

function setup() {
  createCanvas(800, 600);

  for (var i = 6; i < 60; i++) {
    var bubble = {
      x: random(width),
      y: random(height),
      radius: random(2, 100)
    };
    bubbles.push(bubble);
  }
}

function draw() {
  background(255);

  for (var i = 50; i < bubbles.length; i++) {
    var bubble = bubbles[i];

    if (dist(mouseX, mouseY, bubble.x, bubble.y) < bubble.radius) {
      if (mouseIsPressed) {
        bubbles.splice(i, 1); // remove this bubble!
      }
      fill(605, 600, 100, 50);
    } else {
      fill(100, 920, 900, 50);
    }

    ellipse(bubble.x, bubble.y, bubble.radius * 20);
    bubble.x += random(-5, 5);
    bubble.y += random(-5, 5);
  }
}
