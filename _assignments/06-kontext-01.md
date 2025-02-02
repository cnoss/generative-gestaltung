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
Wie zuvor, aber diesmal kopieren wir die Zeichnung rotierend auf der Montagefläche. Hierzu müssen wir mit [createGraphics](https://p5js.org/reference/p5/createGraphics) eine Art *virtuelle Zeichenfläche* erzeugen, die wie dann auf unserer Hauptzeichenfläche platzieren.

### Deklarationsblock

```
let virtualCanvas;
```

### Setup Funktion

```
  virtualCanvas = createGraphics(width, height);
  virtualCanvas.colorMode(HSB, 360, 100, 100, 100);
  virtualCanvas.fill(0,0,0,100);
  virtualCanvas.stroke(0,0,0,100);
  virtualCanvas.strokeWeight(1);
  virtualCanvas.smooth();
```

### Draw Funktion
```

virtualCanvas.ellipse(posX, posY, size);

for (let i = 0; i <= drawingParams.virtualCanvases; i++) { 
  push()
  rotate(i * drawingParams.rotAngle);
  image(virtualCanvas, width * -0.5, height * -0.5);
  pop();
}
```

<figure class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=nl3xiwUTuXVIIr5e&amp;list=PLfnobFnVauQAePm-jOlxCEO7DGdSMkHKF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<figcaption>
Ein paar Anregungen zur Lösung der Aufgaben gibt es in dieser Playlist.
</figcaption>
</figure>
