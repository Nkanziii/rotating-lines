let inc = 0.1 //increment
let scl = 10; //scale
let cols, rows;

let offZ = 0;


function setup() {
  createCanvas(400, 400);
 

  cols = floor(width/scl);
  rows = floor(height/scl);
}

function draw() {
  background(0);
  let offY = 0;
  for (let y = 0; y < rows; y++){
    let offX = 0;
    for (let x = 0; x < cols; x++) {
      let index = (x + y * width) * 4;
      let r = noise(offX, offY) * 255;
      let angle = noise(offX, offY, offZ) * TWO_PI;
      let v = p5.Vector.fromAngle(angle);
      offX += inc;
      stroke(" #e32cb5");
      push();
      translate(x * scl, y * scl);
      rotate(v.heading());
      line(0, 0, scl, 0);
      
      pop();
    }
    offY += inc;
    offZ += 0.001;
  }
}
