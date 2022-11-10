---
titel: Fun with Dots, Level 1 – Einzelne Punkte
tags: Punkt
---

## P1 Ein dummer Punkt
Platzieren Sie einen [schwarzen](https://p5js.org/reference/#/p5/fill) [Punkt](https://p5js.org/reference/#/p5/ellipse) beliebiger Größe auf der [weißen Zeichenfläche](https://p5js.org/reference/#/p5/background).

## P1.1 Zentrierter Punkt
Platzieren Sie den Punkt in der Mitte der Zeichenfläche. Hier helfen die p5 Umgebungsvariabeln [width](https://p5js.org/reference/#/p5/width) und [height](https://p5js.org/reference/#/p5/height).

## P1.2 Beweglicher Punkt
Positionieren Sie den Punkt auf der X-Achse entsprechend der Mausposition. Hierfür brauchen wir das p5 MouseEvent [mouseX](https://p5js.org/reference/#/p5/mouseX).

## P1.3 Beweglicher Punkt bis zum Rand
Positionieren Sie den Punkt auf der X-Achse entsprechend der Mausposition, allerdings soll sich der Punkt nicht über den Rand der Zeichenfläche hinaus bewegen. Ok, hier muss ein bisschen gerechnet werden. Hier könnte auch die [constrain](https://p5js.org/reference/#/p5/constrain)-Funktion helfen.

## P1.4 Punktgröße steht im Verhältnis zur Zeichenfläche
Bislang hatte der Punkt eine absolute Größe. Jetzt soll sich die Größe des Punktes auf die Zeichenfläche beziehen, d.h. bei veränderter Größe der Zeichenfläche, soll auch der Punkt seine Größe ändern. Die Größe der Zeichenfläche lässt sich mit Hilfe der Umgebungsvariabeln [width](https://p5js.org/reference/#/p5/width) und [height](https://p5js.org/reference/#/p5/height) auslesen.

## P1.5 Punktgröße ist abhängig von der Mouseposition
Jetzt koppeln wir die Größe des Punktes an die Mausposition.

## P1.6 Zwei gegeneinanderlaufende bewegliche Punkte
Positionieren Sie diesmal zwei Punkte auf der X-Achse. Diesmal folgt der eine Punkt der Mausposition, der andere nimmt immer die gespiegelte Position ein. Auf der Y-Achse sind beide Punkte gleich zu positionieren, d.h. die Punkte auf `y=height/2` zu platzieren. Somit überlagern sich die Punkte in der Mitte.


<figure class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLfnobFnVauQBvOA3GITOLNUuTRcbYWtf8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<figcaption>
Ein paar Anregungen zur Lösung der Aufgaben gibt es in dieser Playlist.
</figcaption>
</figure>
