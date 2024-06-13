let sourceImg=null;
let carmaskImg=null;
let facemaskImg=null;
let renderCounter=0
let curLayer=0; //variable to seperate the image into layers
//0 is the first layer (background)
//anything other than zero is the second layer (car)

// change these four lines as appropiate
let sourceFile = "input_6.jpg"; //original photo
let carmask   = "mask_car6.png"; //mask of the car shape
let facemask = "mask_face6.png" //mask of the car's face
let outputFile = "output_6.png"; //processed image

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
  colorMode(HSB);
}

let OFFSET = 4; //the level of blur in the background

function draw () {

  if (curLayer == 0) { //if the first layer is being processed
    let num_lines_to_draw = 40; 
    for(let j=renderCounter; j<renderCounter+num_lines_to_draw && j<1080; j++) { 
      for(let i=0; i<1920; i++) {
        colorMode(RGB); 
        let pix = [0, 0, 0, 255];
        let car = carmaskImg.get(i, j);
        if (car[1] > 128) {
          pix = sourceImg.get(i, j); 
        }
        else { //blur background where the car isnt
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
  }
  else { //when the first layer is processed
    rectMode(CORNERS);
    for(let i=0; i<100; i++) {
      let x1 = random(0, width);
      let y1 = random(0, height);
      let x2 = x1 + random(0, 20);
      let y2 = y1 + random(0, 20);
      colorMode(RGB);
      let pix = sourceImg.get(x1, y1);
      let car = carmaskImg.get(x1, y1);
      let face = facemaskImg.get(x1, y1);
      let col = color(pix); //the original colour of the pixels in the image
      stroke(col);
      fill(col);
      if(car[1] < 128) { //nothing in the if statment cos this is where the car isnt
      }
      else {
        rect(x1,y1,x2,y2); //pixelise the car
      }
      if(face[1] < 128) {
      }
      else { //the face of the car is done last so its on top of the car mask
        fill(208, 242, 97); //yellowy neon green
        noStroke(); //cover the face in ellipses
        ellipse(x1,y1,20,20);
      }
    }
    renderCounter = renderCounter + 1;
  }  
   
  if(curLayer == 0 && renderCounter > 1080) {
    curLayer = 1;
    renderCounter = 0;
  }
  else if(curLayer == 1 && renderCounter > 500) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    //saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}

