---
titel: Transformationen
tags: Fläche & Form
---

## FF2 Transformation der Form
Teilen Sie die Zeichenfläche in ein Raster von 3x3 Segmenten. Jedes Segment soll eine eigene Hintergrundfarbe bekommen. Die Hintergrundfarben sollten einen harmonischen, warmen Farbklang aus maximal drei Grundfarben ergeben. Erzeugen Sie jetzt zeilenweise von links oben nach rechts unten eine Transformation von einem Dreieck (links oben) zu einem Kreis (rechts unten). Nutzen Sie bitte nur eine weiße Umrandungslinie für die Darstellung der Form. Hierzu sind [Shapes](https://p5js.org/reference/#/p5/beginShape) erforderlich, z.B.

```
beginShape();
  vertex(30, 20);
  vertex(85, 20);
  vertex(85, 75);
  vertex(30, 75);
endShape(CLOSE);
```

## FF2.1 Transformation abhängig vom Seitenverhältnis
Wie zuvor, aber teilen Sie diesmal die Zeichenfläche in ein Raster von 3x3 Segmenten bei einer quadratischen Zeichenfläche, oder 5x4 Segmenten bei einer rechteckigen Zeichenfläche auf.

## FF2.2 Transformation mit tastendem Strich
Nutzen Sie ein ähnliches Setup wie zuvor. Diesmal bleibt der Hintergrund jedoch schwarz und die der Farbklang wird auf die Figuren angewendet. Zeichnen Sie die Figuren jetzt nicht nur einmal, sondern mehrfach mit leichten Zufallswerten übereinander, so dass ein Art Unschärfe entsteht.

## FF2.3 Transformation mit tastendem Strich und Tiefenstaffelung
Nutzen Sie das gleiche Setup wie zuvor, aber fügen Sie der Komposition eine Tiefenstaffelung hinzu, indem Sie:
1. die hinten liegenden Elemente dunkler zeichnen
2. jedem Element einen Schatten geben

<figure class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLfnobFnVauQAWl99_uwNOMin3PoexKVmC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<figcaption>
Ein paar Anregungen zur Lösung der Aufgaben gibt es in dieser Playlist.
</figcaption>
</figure>