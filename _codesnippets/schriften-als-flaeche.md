---
titel:  Schrift als Fläche
autor: cn
tags: Beispielcode
---

```
let fontPath, font, shiftX, shiftY, fontsize;
let fontSizeFactor = 0.7;
let items = [];
```

```
  opentype.load('../../assets/fonts/FreeSerifBold.otf', function(err, f) {
    if (err) {
      print(err);
    } else {
      font = f;
      
      shiftX = drawingParams.shiftX;
      shiftY = drawingParams.shiftY;
      fontsize = drawingParams.fontsize;
      items.push(new Char("B", 2, shiftX, shiftY, fontsize));

      loop();
    }
  });
```

```
class Char{ 
  constructor(char, stepwidth, shiftX, shiftY, fontsize) { 
    this.char = char;
    this.stepwidth = stepwidth;
    this.shiftX = shiftX;
    this.shiftY = shiftY;
    this.fontsize = fontsize;
    this.path = this.getPath();
  }

  draw() { 
    for (let i = 0; i < drawingParams.runs; i++) { 
      this.drawChar();
    }
  }

  drawElement(element) { 
    for (let i = 0; i < element.length; i += this.stepwidth) {
      let zufallX = random(drawingParams.minEntropy, drawingParams.maxEntropy) * (random(0,1) < 0.5 ? -1 : 1);
      let zufallY = random(drawingParams.minEntropy, drawingParams.maxEntropy) * (random(0,1) < 0.5 ? -1 : 1);
      vertex(element[i].x + zufallX, element[i].y + zufallY);
    }
  }

  setShiftX(shiftX) { this.shiftX = shiftX; }
  setShiftY(shiftY) { this.shiftY = shiftY; }
  setStepwidth(stepwidth) { this.stepwidth = stepwidth; }
  setFontsize(fontsize) {
    this.fontsize = fontsize;
    this.path = this.getPath();
  }

  drawChar() {
    let elements = this.path.points;
    let first = elements[0];
    push();
    translate(this.shiftX, this.shiftY);
    beginShape();
      this.drawElement(first);  
      for (let i = 1; i < elements.length; i++) {
        beginContour();
        this.drawElement(elements[i]);
        endContour(CLOSE);
      }
    endShape(CLOSE);
    pop();
  }

  getPath() {
    let pathData = [];
    let pointer = 0;
    let fontPath = font.getPath(this.char, 0, this.fontsize * fontSizeFactor, this.fontsize);
    let path = new g.Path(fontPath.commands);
    path = g.resampleByLength(path, 1);
    path.commands.forEach((command) => {
      if (command.type === "Z") { pointer++; }
      if (!pathData[pointer]) { pathData[pointer] = []; }
      if (command.x) { pathData[pointer].push(command);}
    });
    for (let i = pathData.length -1; i >= 0 ; i--) {
      if (pathData[i].length === 0) { pathData.splice(i, 1); }
    }
  
    let ret = {};
    ret.points = pathData;
    ret.bounds = {
      w: path.bounds().width,
      h: path.bounds().height
    };
    return ret;
  }
}
```