---
titel: Camera & Audio Input
tags: Kontext
---

## C2 Mandala mit Kamera Input
Wie Aufgabe C1.3, aber diesmal ziehen wir die Farbe aus dem Kamerabild mit Hilfe der p5 Funktion [createCapture](https://p5js.org/reference/p5/createCapture).

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

{% include youtube.html id="yhBjfCwBcAE" %}
{% include youtube.html id="K3gy_afGGaU" %}

## C4 & C4.1 Handtracking
Jetzt wird es lustig … und komlex. Wir nutzen [Handtracking.js](https://github.com/victordibia/handtrack.js/) zur Steuerung. Dazu brauchen wir ein bisschen zusätzlichen Code. In der *ìndex.html* muss der Codeblock für *Handtrack.js* einkommentiert werden.

**Ergänzungen für den Deklarationsblock**
```
// Video Capturing
let videoCapture;
const handimg = document.getElementById("handimage");
const canvasHT = document.getElementById("canvasHT");
const context = canvasHT.getContext("2d");

// Handtrack.js
const modelParams = {
  flipHorizontal: true,   // flip e.g for video  
  maxNumBoxes: 20,        // maximum number of boxes to detect
  iouThreshold: 0.5,      // ioU threshold for non-max suppression
  scoreThreshold: 0.6,    // confidence threshold for predictions.
}

let imgindex = 1;
let isVideo = false;
let model = null;
let modelData = {};
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
    
    const point = predictions.filter(function (prediction) { return prediction.label === 'point' });
    const closed = predictions.filter(function (prediction) { return prediction.label === 'closed' });
    
    if (point.length > 0) {
      [modelData.x, modelData.y, modelData.w] = point[0].bbox;
    }
    if (isVideo) {
      requestAnimationFrame(runDetection);
    }
  });
}
```

**Ergänzung der Setup Funktion**
```
  // Handtrack.js
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
  const posX = map(modelData.x, 0, 320, 0, width);
  const posY = map(modelData.y, 0, 240, 0, height);
  const size = map(modelData.y, 0, 320, 0, 100);
```
{% include youtube.html id="aR-f4A0SKNQ" %}
