function setup() {
  createCanvas(windowWidth, windowHeight);
  print(width)
  background('beige');
}

function draw() {
  
  ellipse(50, 290, 20)
  rect (mouseX, mouseY, 20)
}


function meow() {
  print('meow')
}

function mousePressed() {
  fill('red')
  rect(50, 50, 200)
  print(mouseX)
  if (mouseX > 200) {
    print('hehe')
  } else { print('haha')}
  meow();
}