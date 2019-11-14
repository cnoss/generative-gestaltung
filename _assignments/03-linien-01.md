---
titel: Linien, Level 1 – Anordnungen im Raster
tags: Linie
---

## L1 Raster aus vertikalen Linien
Erzeugen Sie aus beliebig vielen vertikalen Linien ein Raster und zentrieren Sie die Formation im Format. Die Anzahl der Linien sollte mit einem Slider einstellbar sein. Varieren Sie weitere Parameter.

## L1.1 Raster aus vertikalen Liniensträngen
Unterteilen Sie die Darstellungsfläche in mehere Reihen und füllen Sie die einzelnen Reihen mit vertikalen Linien. Die Abstände zwischen den Linien sollten in den verschiedenen Reihen unterschiedlich sein.

## L1.2 Raster wird nach außen dunkler
Wie zuvor, aber diesmal koppeln wir die Helligkeit an die X-Position des Elements, d.h. je weiter das Element von der Mitte entfernt ist, desto dunkler wird es dargestellt. Die Linienanfänge haben einen Bezug zu den Linienenden der vorhergehenden Reihe.

## L1.3 Raster wird nach außen dunkler
Wie zuvor, aber diesmal koppeln wir die Helligkeit an die X-Position des Elements, d.h. je weiter das Element von der Mitte entfernt ist, desto dunkler wird es dargestellt. Die Linienanfänge haben keinen Bezug zu den Linienenden der vorhergehenden Reihe.

## L1.4 Überlagerung
Wir erzeugen zwei Linienraster und verdrehen diese gegeneinander via Slider.

## L1.5 Überlagerung für Große
Wir erzeugen viele Linienraster und verdrehen diese gegeneinander via Slider. Mit einem Tastendruck soll stets ein weiteres Raster addiert werden.

Hier könnte zum ersten Mal eine Klasse hilfreich sein. Die entsprechende Klasse könnte in Javascript wie folgt implementiert werden:

```
class Grid {
  constructor( angle ) { 
    this.angle = angle;
  }
  show() { 
    translate(width / 2, height / 2);
    rotate(this.angle);
    translate(width / -2, height / -2);
    let distance = width / drawingParams.lines;
    for (let i = 0; i < drawingParams.lines; i++) { 
      line(i * distance, 0, i * distance, height);
    }
  }
  edit(angle) { 
    this.angle = angle;
  }
}
```

In der *setup* Funktion und beim Drücken einer bestimmten Taste würde eine neue Instanz dieser Klasse einem Array zugefügt:

```
let grids = [];
…
grids.push(new Grid(drawingParams.angle)); 
```

Und in der *Draw* Funktion wird das Array durchlaufen und die Darstellung getriggert:

```
grids.forEach(
  (item, index) => { 
    item.show();
    lastGrid = index;
  }
);
```

## L1.6 Angeschnittene Linienraster
Erzeugen Sie zwei Linienraster mit horizontalen Linien verschiedener Länge. Ein Linienraster soll dabei links an der Zeichenfläche anschlagen, das andere rechts. Die Länge der Linien sollte variieren, so dass in der Mitte teilweise Überschneidungen und teilweise Negativräume entstehen.
