---
titel: Farbige Punkte, Master Class
tags: Farbe
---
## F3 Radiales Raster
Jetzt wird es etwas komplex. Wir erstellen ein radiales Raster aus Punkten. Dabei soll die Punktgröße und ein Startradius via Slider editierbar sein. Dann wird, ausgehend von diesen beiden Parametern, ermittelt, wie viele Punkte auf der zugehörigen Kreisbahn angeordnet werden können. Hmmm, klingt einfach, ist es aber nicht. Hierfür könnte die Berechnung des Umfangs hilfreich sein:

```
let U = TWO_PI * radius;
```

Da die Punktgröße ja durch den Slider vorgegeben ist und die Wahrscheinlichkeit, dass der Umfang der Kreisbahn zufällig genauso groß ist, um die ermittelte Anzahl der Punkte darauf platziert zu können, müssen wir die Punkte in einem gleichmäßigen Abstand auf der Kreisbahn platzieren. Hierfür ist die Nutzung des Bogenmaßes(Radian) ziemlich praktisch. P5 bietet mit [degrees](https://p5js.org/reference/#/p5/degrees) und [radians](https://p5js.org/reference/#/p5/radians) Funktionen zur Umrechnung von Grad- in Bogenmaß. Im Ergebnis sollte ein Kreisring aus Punkten entstehen.

Dann erzeugen wir meherere dieser Ringe, wobei die Anzahl auch via Slider eingestellt werden kann. Der Radius der Ringe sollte jeweils so erhöht werden, dass ein gleichmäßiges Raster entsteht. Nun können wir hier einige Parameter zur Farbsteuerung mit Geometrieparametern verknüpfen.

<figure class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/084da6vvAHs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<figcaption>
Ein paar Anregungen zur Lösung der Aufgaben gibt es in dieser Playlist.
</figcaption>
</figure>