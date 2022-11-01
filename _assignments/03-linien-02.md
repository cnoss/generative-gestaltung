---
titel: Linien, Level 2 – Beziés und radiale Anordnungen
tags: Linie
---

## L2 Überlagerung mit Bezier Kurven
Erzeugen Sie eine interessante Komposition aus einem Raster mit [Bezier Kurven](https://p5js.org/reference/#/p5/bezier).

## L4 Linien in radialer Anordnung
Erzeugen Sie ein radiales Linienraster mit konzentrischer Anordnung, d.h. die Linien beginnen alle in der Mitte der Zeichenfläche und gehen dann radial nach außen. Nutzen Sie z.B. verschiedene Linienlägen, Linienstärken oder gar mehrere konzentrische Formationen auf der Z-Achse, um eine interessante Gesamtkomposition zu erzielen.

## L4.1 Tordierte radiale Anordnung
Erzeugen Sie wieder ein radiales Linienraster. Diesmal sollte sich die Startkoordinate der jeweiligen Linie auf einer Kreisbahn befinden, so dass im Ergebnis eine radiale Formation mit einem «Loch» in der Mitte entsteht. Jetzt sollten die beiden Kreise via Slider gegeneinander verdreht werden können. Versuchen Sie die verschiedenen Parameter des Sketches dahingehend zu optimieren, dass eine möglichst spannende Gesamtkomposition entsteht. Es ist hilfreich möglichst viele Parameter an Slider zu binden und den Wertebereich ggf. auch in den negativen Bereich zu legen.

## L4.3 Tordierte radiale Anordnung mit Ellipsen
Wie 4.1, aber diesmal verwenden Sie keine Kreisbahnen, sondern elliptische Bahnen. Dazu einfach verschiedene Radien für die Berechnung der X- und Y-Position verwenden.

```
let x = cos(angle) * radius1;
let y = sin(angle) * radius2;
```

<figure class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLfnobFnVauQC54BQkcZs7irvqI9h6Zry1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<figcaption>
Ein paar Anregungen zur Lösung der Aufgaben gibt es in dieser Playlist.
</figcaption>
</figure>
