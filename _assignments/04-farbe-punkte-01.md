---
titel: Farbigkte
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
