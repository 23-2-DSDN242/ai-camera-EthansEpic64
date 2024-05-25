let sourceImg=null;
let carmaskImg=null;
let facemaskImg=null;
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "input_1.jpg";
let carmask   = "mask_car1.png";
let facemask = "mask_face1.png"
let outputFile = "output_1.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  carmaskImg = loadImage(carmask);
  facemaskImg = loadImage(facemask);
}

function setup () {
  let main_canvas = createCanvas(1920, 1080);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(0,0,0);
  sourceImg.loadPixels();
  facemaskImg.loadPixels();
  carmaskImg.loadPixels();
}

function draw () {
  for(let i=0;i<4000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let car = carmaskImg.get(x, y);
    let face = facemaskImg.get(x,y);
    fill(pix);
    if(face[0] > 128) {
      let pointSize = 20;
      fill(255,0,0,80);
      ellipse(x, y, pointSize, pointSize);
    }
    else {
      let pointSize = 10;
      rect(x, y, pointSize, pointSize);    
    }
    if(car[0] > 128) {
      let pointSize = 12;
      fill(0);
      rect(x,y,pointSize, pointSize);
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    // saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
