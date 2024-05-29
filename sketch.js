let sourceImg=null;
let carmaskImg=null;
let facemaskImg=null;
//let renderCounter=0;

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

let X_STOP = 640;
let Y_STOP = 480;

// let X_STOP = 1920;
// let Y_STOP = 1080;

let OFFSET = 2; //CHAGNE TO 4 for outputs

let renderCounter=1;

function draw () {

  colorMode(HSB);
  let num_lines_to_draw = 100;
  for(let j=renderCounter; j<renderCounter+num_lines_to_draw && j<1920; j++) {
    for(let i=5; i<X_STOP; i++) {
      colorMode(RGB);
      let pix = [0, 0, 0, 255];
      let car = carmaskImg.get(i, j);
      if (car[1] > 128) {
        pix = sourceImg.get(i, j);
      }
      else {
        let sum_rgb = [0, 0, 0]
        let num_cells = 0;
        for(let wx=-OFFSET;wx<OFFSET;wx++){
          for (let wy=-OFFSET;wy<OFFSET;wy++) {
            let pix = sourceImg.get(i+wx, j+wy);
            for(let c=0; c<3; c++) {
              sum_rgb[c] += pix[c];
            }
            num_cells += 1;
          }
        }
        for(let c=0; c<3; c++) {
          pix[c] = int(sum_rgb[c] / num_cells);
        }        
     }

     set(i, j, pix);
  }
  }
 
  renderCounter = renderCounter + num_lines_to_draw;
  updatePixels();

  colorMode(RGB);
  for(let i=0;i<=4000;i++) {
    let x = (random(sourceImg.width)); //MAKE THESE NOT RANDOM??
    let y = (random(sourceImg.height));
    let pix2 = sourceImg.get(x, y);
    let car2 = carmaskImg.get(x, y);
    let face2 = facemaskImg.get(x,y);
    let col = color(pix2);
  
    if(car2[0] > 128) {
      colorMode(HSB, 360,100,100);
      let h = hue(col);
      let s = saturation(col);
      let b = brightness(col);

      let new_brt = map(b, 0, 100, 30, 50);
      let new_col = color(h, 0, new_brt);
      set(x, y, new_col);
      //let pointSize = 12;
      //rect(x,y,pointSize, pointSize);
    }

    fill(pix2);
    if(face2[0] > 128) {
      colorMode(RGB);
      let pointSize = 20;
      fill(255,0,0,80);
      ellipse(x, y, pointSize, pointSize);
    }

  }

  renderCounter = renderCounter + 1;
  if(renderCounter > Y_STOP) {
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

