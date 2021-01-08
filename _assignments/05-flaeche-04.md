---
titel: Bewegte Formen
tags: Fläche & Form
---

## FF4 Moving Shapes
Erzeugen Sie ein Raster von beliebig vielen Quadraten. Nutzen Sie zur Erzeugung der Quadrate die Shape Funktionen von p5.js:

```
beginShape();
vertex(30, 20);
vertex(85, 20);
vertex(85, 75);
vertex(30, 75);
endShape(CLOSE);
```

Binden Sie nun die Form der Quadrate an die Mausposition. Hierfür ist wieder die [dist Funktion](https://p5js.org/reference/#/p5/dist) sehr hilfreich.
