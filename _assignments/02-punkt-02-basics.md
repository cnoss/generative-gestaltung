---
titel: Fun with Dots, Level 2 – Lineare Anordnungen
tags: Punkt
---

## P2 Punkte linear angeordnet
Platzieren Sie beliebig viele schwarze Punkte einer Größe, linear auf der X-Achse angeordnet. Zentrieren Sie die Formation auf der weißen Zeichenfläche. Verwenden Sie zur Erzeugung der Formation eine hübsche [Schleife](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration).

**obligatorisch**

## P2.1 Punktgröße ist abhängig von der Größe der Zeichenfläche
Jetzt wird's ein bissl komplex. Die Punkte werden wieder linear angeordnet. Die Anzahl der Punkte wird durch Sie definiert, z.B. 16. Die Punkte werden linear angeordnet und im Format zentriert. Der Abstand zwischen zwei Punkten entspricht dem Durchmesser der Punkte. Die Größe und damit auch der Abstand soll sich automatisch nach der Größe der Zeichenfläche richten. Hierbei könnte eventuell die p5 Translate Prozedur [translate](https://p5js.org/reference/p5/translate) helfen.

**obligatorisch**

## P2.2 Anzahl der Punkte ist abhängig von der Größe der Zeichenfläche
Gleiches Setup wie in der Aufgabe zuvor, aber nun wird die Größe der Punkte von Ihnen definiert und die Anzahl der Punkte soll automatisch ermittelt werden, so dass gleichmäßig viele in die Zeichenfläche passen.

**obligatorisch**

## P2.3 Anzahl der Punkte ist abhängig von der Größe der Zeichenfläche und die Punktgröße wird variiert.
Wie die Aufgabe zuvor: die Größe der Punkte wird von Ihnen definiert und die Anzahl der Punkte wird automatisch ermittelt. Beim Zeichnen der Punkte wird die Größe der Punkte jedoch mit einen [Zufallswert](https://p5js.org/reference/p5/random) multipliziert. Hierdurch können Überlagerungen entstehen und somit könnte es interessant sein, den alpha-Wert der Füllung etwas zu reduzieren. Bei diesem Sketch könnte der Wertebereich der Zufallszahl auch an die Mausposition gebunden sein. Hierzu ist die [Map Berechnung](https://p5js.org/reference/p5/map) von p5 mitunter hilfreich. Sobald Zufallszahlen ins Spiel kommen, lohnt sich ein Blick auf die [randomSeed Funktion](https://p5js.org/reference/p5/randomSeed) von p5.

**obligatorisch**

## P2.4 Punktegröße und Position der Formation abhängig von der Mausposition
Wieder werden beliebig viele Punkte linear angeordnet. Die Formation schlägt diesmal links an und läuft nach rechts in den Anschnitt. Die Größe der Punkte ist abhängig von der X-Position der Maus. Die Y-Position der Formation ist abhängig von der Y-Position der Maus.

## P2.5 Spiegelverkehrte Anordnung
Wie zuvor, allerdings erzeugen wir jetzt zwei Formationen, die über die horizontale Mittelachse gespiegelt werden. Bei diesem Sketch könnte es interessant sein, die ganze Formation per Mausklick ein Stück zu [drehen](https://p5js.org/reference/p5/rotate) und so mehrere Ebenen übereinander zu legen.

**obligatorisch**

## P2.6 Kreisförmige Anordnung
Anstatt einer linearen Anordnung, platzieren wir die Punkte jetzt mal auf einem Kreis, d.h. wir erzeugen eine kreisförmige Formation von Punkten. Hierzu ist ein wenig Trigonometrie hilfreich:

**Im Setup den Winkelmodus setzen**
````
angleMode(DEGREES);
````

**Winkel berechnen**
```
angleSteps = 360 / anzahl-der-punkte
```

**X- und Y-Position berechnen**
```
for (let angle = 0; angle < 360; angle += angleSteps){
  const x = cos(angle) * radius;
  const y = sin(angle) * radius;
  
  // do anything :)
}
```

**obligatorisch**

<figure class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLfnobFnVauQAQdX6wGF4SPyG_4EXqHMBg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<figcaption>
Ein paar Anregungen zur Lösung der Aufgaben gibt es in dieser Playlist.
</figcaption>
</figure>