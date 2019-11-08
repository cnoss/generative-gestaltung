---
titel: Farbige Punkte
tags: Farbe
---

## F1 Farbige Punkte
Erzeugen Sie eine lineare Anordnung von beliebig vielen Punkten. Die Farbe der Punkte soll entlang des Farbkreises sein. Koppeln Sie ggf. verschiedene Parameter an Eingaben, z.B. über die Maus oder Tastatur.

## F1.1 Farbige Punkte mit GUI
Wir nutzen den Sketch von zuvor, aber ergänzen diesen um eine GUI Komponente zur Steuerung der Parameter. Dazu verwenden wir die Library [p5.gui](https://github.com/bitcraftlab/p5.gui). Im Startercode ist die GUI bereits vorbereitet. Zur Nutzung setzen Sie den Wert von *canvasParams.gui* auf *true*:

```
let canvasParams = {
  holder: document.getElementById("canvas"),
  state: false,
  mouseX: false,
  mouseY: false,
  background: 0,
  gui: false
};
```

## F1.2 Farbige Punkte im Kreis
Wieder erzeugen wir farbige Punkte entlang des Farbkreises, diesmal jedoch in einer kreisförmigen Anordnung. Über die GUI sollen folgende Parameter steuerbar sein:
- Anzahl der Punkte
- Größe der Punkte
- Radius der Gesamtformation
- Umfang des Farbkreises
- Alphawert der Punkte

## F2 Farbiges Punktraster
Erzeugen Sie ein flächenfüllendes Punktraster. Der Farbwert (hue) ist zunächst 120. Auf der X-Achse soll die Sättungabnehmen und auf der Y-Achse die Helligkeit. Die [Map Funktion](https://p5js.org/reference/#/p5/map) ist hier wieder sehr hilfreich. 

Im nächsten Schritt soll der Farbwert stetig im Farbkreis wandern, also immer von 0 bis 360° Grad.

## F2.2 Komplementärkontrast
Erzeugen Sie, wie zuvor, ein flächenfüllendes Punktraster. Die Helligkeit soll mit der Y-Achse nach unten hin abnehmen. Erzeugen Sie einen Komplementärkontrast auf der X-Achse an der Position der Maus, d.h. alle Punkte links nehmen der Maus haben die Ausgangsfarbe und alle Punkte rechts neben der Maus die zugehörige Komplementärfarbe. Sie könnten die Ausgangsfarbe an die Y-Position der Maus binden.

## F2.3 Hell-Dunkel Kontrast
Wir erzeugen wieder ein flächenfüllendes Punktraster. Diesmal soll ein Hell-Dunkel oder Bunt-Unbunt Kontrast realisiert werden. Die Herausforderung ist die Platzierung der Kontrastfläche radial um den Mauszeiger. Hierbei kann die [Dist Funktion](https://p5js.org/reference/#/p5/dist) gute Dienste leisten, denn mit ihrer Hilfe können wir den Abstand von zwei Punkten errechnen.

## F2.4 Quantitätskontrast
Wir erzeugen wieder ein flächenfüllendes Punktraster. Diesmal soll ein Quantitätskontrast realisiert werden. Die Herausforderung ist die Platzierung der Punkte in Kombination mit einem einstellbaren Verhältniswert zwischen der Grund- und der Kontrastfarbe. Folgende Parameter sollten über die GUI steuerbar sein:
- Farbwinkel der Grundfarbe
- Winkelabstand der Kontrastfarbe
- Mengenverteilung zwischen Grund- und Kontrastfarbe

## F3 Radiales Raster
Jetzt wird es etwas komplex. Wir erstellen ein radiales Raster aus Punkten. Dabei soll die Punktgröße und ein Startradius via Slider editierbar sein. Dann wird, ausgehend von diesen beiden Parametern, ermittelt, wie viele Punkte auf der zugehörigen Kreisbahn angeordnet werden können. Hmmm, klingt einfach, ist es aber nicht. Hierfür könnte die Berechnung des Umfangs hilfreich sein:

```
let U = TWO_PI * radius;
```

Da die Punktgröße ja durch den Slider vorgegeben ist und die Wahrscheinlichkeit, dass der Umfang der Kreisbahn zufällig genauso groß ist, um die ermittelte Anzahl der Punkte darauf platziert zu können, müssen wir die Punkte in einem gleichmäßigen Abstand auf der Kreisbahn platzieren. Hierfür ist die Nutzung des Bogenmaßes(Radian) ziemlich praktisch. P5 bietet mit [degrees](https://p5js.org/reference/#/p5/degrees) und [radians](https://p5js.org/reference/#/p5/radians) Funktionen zur Umrechnung von Grad- in Bogenmaß. Im Ergebnis sollte ein Kreisring aus Punkten entstehen.

Dann erzeugen wir meherere dieser Ringe, wobei die Anzahl auch via Slider eingestellt werden kann. Der Radius der Ringe sollte jeweils so erhöht werden, dass ein gleichmäßiges Raster entsteht. Nun können wir hier einige Parameter zur Farbsteuerung mit Geometrieparametern verknüpfen.