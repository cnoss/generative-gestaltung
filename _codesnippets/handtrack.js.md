---
titel:  Handtrack.js
autor: cn
tags: Programmiertechnik
---


```

let videoCapture;
const handimg = document.getElementById("handimage");
const canvasHT = document.getElementById("canvasHT");
const context = canvasHT.getContext("2d");

const modelParams = {
  flipHorizontal: true,   // flip e.g for video  
  maxNumBoxes: 20,        // maximum number of boxes to detect
  iouThreshold: 0.5,      // ioU threshold for non-max suppression
  scoreThreshold: 0.6,    // confidence threshold for predictions.
}

let imgindex = 1;
let isVideo = false;
let model = null;


/* ###########################################################################
Custom Functions
############################################################################ */

function startVideo() {
  handTrack.startVideo(videoCapture).then(function (status) {
      if (status) {
          isVideo = true
          runDetection()
      } else {
      }
  });
}

function runDetection() {
  model.detect(videoCapture).then(predictions => {
    //console.log("Predictions: ", predictions);
    if (predictions[0]) {
      [drawingParams.x, drawingParams.y, drawingParams.w] = predictions[0].bbox;
    }
    if (predictions[1]) {
      [drawingParams.cw] = predictions[1].bbox;
    }
    if (isVideo) {
      requestAnimationFrame(runDetection);
    }
  });
}


/* ###########################################################################
P5 Functions
############################################################################ */


function setup() {

  let canvas = createCanvas(canvasParams.w, canvasParams.h);
  canvas.parent("canvas");

  
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
  angleMode(DEGREES);

  let sketchGUI = createGui('Params');
  sketchGUI.addObject(drawingParams);

  // Video Input
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.class("previewVideo");
  video.id("video");
  videoCapture = document.getElementById("video");
  video.hide();

  // Load the model and start video
  handTrack.load(modelParams).then(lmodel => {
    model = lmodel
    startVideo();
  });

  // only call draw when then gui is changed
  // noLoop();
}

```