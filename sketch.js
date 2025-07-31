let x;
let y;
function setup() {
  createCanvas(400, 400);
  x= random(400);
  x= int(x);
  y= random(400);
  y= int(y);
}
function draw() {
  background(0);
  x = x + random(-5,5);
  y = y + random(-5,5);
  x = constrain( x,0, 400);
  y = constrain(y, 0, 400);
  let distancia;
  distancia = dist(mouseX,mouseY, x, y);
  circle(mouseX,mouseY,distancia);
  //circle(x,y,10);
  if(distancia < 3) {
    fill('white')//cor da fonte
    textSize(42)//tamanho da fonte
    text('Encontrei!',150,200);
    noLoop();
}
  }