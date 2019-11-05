---
titel: Camera & Audio Input
tags: Kontext
---

## C2 Mandala mit Kamera Input
Wie Aufgabe C1.3, aber diesmal ziehen wir die Farbe aus dem Kamerabild mit Hilfe der p5 Funktion [createCapture](https://p5js.org/reference/#/p5/createCapture).

**Kamerabild akquirieren**

```
pixelDensity(1);
video = createCapture(VIDEO);
video.size(1,1);
```

**RGB Werte aus dem Pixel ziehen**

```
video.loadPixels();
let r = video.pixels[0]; 
let g = video.pixels[1];
let b = video.pixels[2];
```

## C3 Mandala mit Audio Input
Wie zuvor, aber diesmal ziehen wir die Transparenz oder einen anderen Parameter aus dem Audiosignal. Dazu nutzen wir die [p5.sound](https://github.com/processing/p5.js-sound).

**Audiosignal akquirieren**
```
mic = new p5.AudioIn();
mic.start();
```

**Pegel des Mikrofons holen**
```
mic.getLevel();
```

## C4 & C4.1 Handtracking
Jetzt wird es lustig … und komlex. Wir nutzen [Handtracking.js](https://github.com/victordibia/handtrack.js/) zur Steuerung. Dazu brauchen wir ein bisschen zusätzlichen Code.

**Ergänzungen für den Deklarationsblock**
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
```

**Ergänzung der Custom Functions**
```
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
```

**Ergänzung der Setup Funktion**
```
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
```

**Nutzung der Daten in der Draw Funktion**
```
let x = map(drawingParams.x, 0, 320, 0, width);
let y = map(drawingParams.y, 0, 240, 0, height);
let w = map(drawingParams.y, 0, 320, 0, 100);
let cw = map(drawingParams.cw, 0, 320, 0, 360);
```