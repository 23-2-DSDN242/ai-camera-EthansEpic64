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

// let X_STOP = 640;
// let Y_STOP = 480;

let X_STOP = 1920;
let Y_STOP = 1080;

let OFFSET = 2;

let renderCounter=0;

function draw () {

  // colorMode(HSB);
  // let num_lines_to_draw = 20;
  // for(let j=renderCounter; j<renderCounter+num_lines_to_draw && j<1080; j++) {
  //   for(let i=5; i<X_STOP; i++) {
  //     colorMode(RGB);
  //     let pix = [0, 0, 0, 255];
  //     let car = carmaskImg.get(i, j);
  //     if (car[1] > 128) {
  //       pix = sourceImg.get(i, j);
  //     }
  //     else {
  //       let sum_rgb = [0, 0, 0]
  //       let num_cells = 0;
  //       for(let wx=-OFFSET;wx<OFFSET;wx++){
  //         for (let wy=-OFFSET;wy<OFFSET;wy++) {
  //           let pix = sourceImg.get(i+wx, j+wy);
  //           for(let c=0; c<3; c++) {
  //             sum_rgb[c] += pix[c];
  //           }
  //           num_cells += 1;
  //         }
  //       }
  //       for(let c=0; c<3; c++) {
  //         pix[c] = int(sum_rgb[c] / num_cells);
  //       }        
  //    }

  //    set(i, j, pix);
  // }
  // }
 
  colorMode(RGB);
  for(let i=0;i<4000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix2 = sourceImg.get(x, y);
    let car2 = carmaskImg.get(x, y);
    let face2 = facemaskImg.get(x,y);
  
    fill(pix2);
    if(face2[0] > 128) {
      let pointSize = 20;
      fill(255,0,0,80);
      rect(x, y, pointSize, pointSize);
    }
    else {
      let pointSize = 10;
      rect(x, y, pointSize, pointSize);    
    }

    if(car2[0] > 128) {
      let pointSize = 12;
      fill(0);
      rect(x,y,pointSize, pointSize);
    }
  }


  renderCounter = renderCounter + num_lines_to_draw;
  updatePixels();

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

