---
titel: Farbige Punkte, Level 1
tags: Farbe
---

Setzen Sie den Farbmodus in Ihrer Setup Funktion auf `colorMode(HSB, 360,100,100,100)`. Damit steht Ihnen das HSL Farbmodell zur Verfügung. Es gelten folgende Parameter:
```
Hue: Farbwinkel 0-360°
Saturation: Sättigung 0-100
Brightness: Helligkeit 0-100

Der letzte Parameter steuert die Transparenz.
```

## F1 Farbige Punkte
Erzeugen Sie eine lineare Anordnung von beliebig vielen Punkten. Die Farbe der Punkte soll entlang des Farbkreises sein. Hierbei könnte die [Map Funktion](https://p5js.org/reference/#/p5/map) hilfreich sein. Koppeln Sie ggf. verschiedene Parameter an Eingaben, z.B. über die Maus oder Tastatur.

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
- Wertebereich des Farbwinkelbereichs (somit kann ich z.B. eine Farbwinkelbereich von 30 - 180° einstellen)
- Alphawert der Punkte

<figure class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLfnobFnVauQCcCzRrcpIGFlXEOiVdvjMc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<figcaption>
Ein paar Anregungen zur Lösung der Aufgaben gibt es in dieser Playlist.
</figcaption>
</figure>