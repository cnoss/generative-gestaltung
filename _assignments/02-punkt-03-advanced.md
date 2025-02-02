---
titel: Fun with Dots, Level 3 – Anordnungen im Raster
tags: Punkt
---

## P3 Punkte in Raster angeordnet
Erzeugen Sie ein Raster bestehend aus 10x10 schwarzen Punkten. Die Formation soll zentriert ausgerichtet sein.

**obligatorisch**

## P3.1 Unruhe im Raster
Erzeugen Sie ein Raster bestehend aus 20x10 schwarzen Punkten. Die Formation soll zentriert ausgerichtet sein. Die Größe der Punkte und Abstände soll sich nach der Größe der Zeichenfläche richten. Entlang der X-Achse soll die Ordnung der Punkte abnehmen, d.h. die Punkte ganz links im Raster haben alle den gleichen Abstand, je weiter ein Punkt jedoch rechts positioniert ist, desto stärker bricht er aus dem Raster aus. Dazu brauchen wir [Zufallswerte](https://p5js.org/reference/p5/random). Sobald Zufallszahlen ins Spiel kommen, lohnt sich ein Blick auf die [randomSeed Funktion](https://p5js.org/reference/p5/randomSeed) von p5. Binden Sie die Progession des Unruhewerts an einen Slider.

**obligatorisch**

**Für Profis:** binden Sie die Anzahl der Punkte und den Abstand zwischen den Punkten an einen Slider. Der Abstand sollte dabei nicht absolut sein, sondern ein Vielfaches der *berechneten* Punktgröße. 

## P3.2 Unruheintensität abhängig von Mausposition
Wie zuvor, aber diesmal richtet sich die Intensität des [Zufallswerts](https://p5js.org/reference/p5/random) nach der Mausposition: je weiter sich die Maus rechts auf der Zeichenfläche befindet, desto größer ist der Zufallswert.

## P3.3 Unruhebereich im Raster abhängig von Mausposition
Wie 3.1, jedoch sollen die Punkte im Raster in Abhängigkeit von der X-Position der Maus aus dem Raster ausbrechen. Befindet sich die Maus z.B. im linken Bereich der Zeichenfläche, dann brechen hier die Punkte aus dem Raster heraus, befindet sich die Maus weiter rechts, brechen hier die Punkte aus dem Raster: der Unruhebereich verschiebt sich also mit dem Raster. Hierbei kann die [dist Funktion](https://p5js.org/reference/p5/dist) sehr hilfreich sein. Auch die [map Funktion](https://p5js.org/reference/p5/map) kann hier helfen.

## P3.4 Ruhebereich im Raster abhängig von Mausposition
Wie 3.3, aber diesmal sind die Punkte in der Nähe des Mauszeigers im Raster und je weiter ihre X-Position vom Mauszeiger entfernt ist, desto stärker brechen Sie aus den Raster aus.

<figure class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLfnobFnVauQDTnRx-OLJQaNEDQcIJ4QNi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<figcaption>
Ein paar Anregungen zur Lösung der Aufgaben gibt es in dieser Playlist.
</figcaption>
</figure>
