---
titel:  Interessante P5.js Funktionen und Beispiele
autor: cn
tags: Inspiration
---


Hier eine kleine Übersicht über praktische, hilfreiche und teils interessante Funktionen und Konzepte, die p5.js bereit stellt. Falls was fehlt, bitte melden.

## Dimensionen des Canvas
Die Eigenschaften [width](https://p5js.org/reference/p5/width) und [height](https://p5js.org/reference/p5/height) stellen die Breite und Höhe der Darstellungsfläche bereit.

## Mausposition
Die Position der Maus lässt sich mit [mouseX](https://p5js.org/reference/p5/mouseX) und [mouseY](https://p5js.org/reference/p5/mouseY) abfragen. Die Umgebung für Generative Gestaltung stellt auch die Mausposition via `canvasParams.mouseX` und `canvasParams.mouseY` bereit. Wenn diese Eigenschaften genutzt werden, ist die Mausposition im *Lock-Modus* (einmal L auf der Tastatur) fixert und die Maus kann frei bewegt werden, ohne Einfluss auf die Eigenschaften `canvasParams.mouseX` und `canvasParams.mouseY` zu nehmen.

## Virtueller Canvas
Für einige Usecases ist es extrem hilfreich nicht direkt auf den sichtbaren Canvas zu zeichenen, sondern einen virtuellen Canvas zu benutzen und diesen nachher auf der Zeichenfläche zu platzieren. Dabei hilft die Funktion [createGraphics](https://p5js.org/reference/p5/createGraphics). Es können auch mehrere virtuelle Canvases genutzt werden und bei der Montage via [image](https://p5js.org/reference/p5/image) können auch unterschiedliche [blendModes](https://p5js.org/reference/p5/blendMode) genutzt werden.

## Pixel abtasten
Wenn wir Bilder als Datenquelle nutzen, dann müssen wir die einzelnen Pixel abtasten/ auslesen. Dabei hilft die [pixels](https://p5js.org/reference/p5/pixels) und die [get](https://p5js.org/reference/p5/get) Funktion von p5.js. Auf der [Generative Gestaltung Website](http://www.generative-gestaltung.de/2/) finden Sie auch ein schönes [Anwendungsbeispiel](http://www.generative-gestaltung.de/2/sketches/?01_P/P_4_3_1_01) dazu.

## Farbabmischung

Mit der p5 Funktion [LerpColor](https://p5js.org/reference/p5/lerpColor) können Sie einen Farbwert zwischen zwei gegebenen Farben ermitteln. Im Umgang mit Farbe ist das manchmal sehr hilfreich.


## Strecken teilen

Ähnlich wie *LerpColor* lässt sich mit der [Lerp](https://p5js.org/reference/p5/lerp)-Funktion eine Strecke teilen, bzw. ein Wert zwischen zwei Werten ermitteln.


## Transformationen

Sobald wir mit Formen arbeiten, sind [Transformationen](https://p5js.org/reference/#group-Transform) jeglicher Art mitunter sehr praktisch und hilfreich.


## Beispiel: Kollisionsberechnung

Bewegung fasziniert oftmals, daher hier ein Codebeispiel zum Thema [Kollision](https://p5js.org/examples/motion-circle-collision.html).


## Beispiel: Ausrichtung auf die Maus

Hierzu ist die Berechung des [arctan2](https://p5js.org/reference/p5/atan2) sehr hilfreich. Hier ein [komplettes Beispiel](https://p5js.org/examples/math-arctangent.html).


## Beispiel: Abstand berechnen

Die Bezugnahme auf die Mausposition oder andere Eingabegeräte kann sehr interessant sein und lädt den Betrachter oft zur Interation ein. Hier ist die Berechnung des [Distanz](https://p5js.org/examples/math-distance-2d.html) oftmals erforderlich.


## Beispiel: Lineare Interpolation

Natürlich Bewegung in den Sketches macht sie meist interessanter und lebendiger. Hierfür ist die Zuhilfenahme von [Linearer Interpolation](https://p5js.org/examples/math-linear-interpolation.html) oftmals eine große Hilfe.


## Beispiel: Wiederholung mit sehr dünnen Strichstärken
Mit Hilfe von Wiederholung und kleinen Variationen kann die Nutzung von sehr dünnen Strichstärken durch die resultierende Überlagerung zu überaus interessanten Ergebnissen führen. Hier ein [Beispiel](http://www.generative-gestaltung.de/2/sketches/?02_M/M_2_5_01) anhand einer Lissajous-Figur. Ein weiteres Beispiel zeigt eine [Malmaschine](https://www.youtube.com/watch?v=5yumD0ezoVE&feature=emb_logo) in der realen Welt. Und weil es so schon ist gleich noch ein Beispiel. In diesem Fall ein [Harmonopraph](https://www.youtube.com/watch?v=HJYvc-ISrf8).