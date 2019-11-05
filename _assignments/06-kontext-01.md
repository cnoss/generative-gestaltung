---
titel: Simple Inputs
tags: Kontext
---

## C1 Zeichnen mit der Maus
Wir zeichen Punkte, bezogen auf die aktuelle Mausposition auf den Screen. Wir zeichenen die Punkte genau da, wo sich die Maus aktuell befindet. Welche Mechaniken aus der realen Welt können wir auf die Zeichnung übertragen?

## C1.2 Rorschach alike 
Wir zeichen wieder Punkte oder Linien auf den Screen, aber jetzt spiegeln wir die Zeichnung über die Mittelachse(n). Die Spiegelungen lassen sich recht einfach mit folgendem Ansatz realisieren:

```
push();
translate(width,height);
scale(-1.0, -1.0);
ellipse(x, y, size);
pop();
```

## C1.3 Mandala
Wie zuvor, aber diesmal kopieren wir die Zeichnung rotierend auf der Montagefläche. Hierzu müssen wir mit [createGraphics](https://p5js.org/reference/#/p5/createGraphics) eine Art *virtuelle Zeichenfläche* erzeugen, die wie dann auf unserer Hauptzeichenfläche platzieren.

```
virtualCanvas = createGraphics(width, height);
…
virtualCanvas.ellipse(posX, posY, size);
…
for (let i = 0; i <= drawingParams.virtualCanvases; i++) { 
  push()
  rotate(i * drawingParams.rotAngle);
  image(virtualCanvas, width * -0.5, height * -0.5);
  pop();
}
```