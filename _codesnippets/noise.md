---
titel:  Perlin Noise
autor: cn
tags: Programmiertechnik
---

Perlin Noise ist eine Methode, um *natürlich wirkende* Zufallswerte zu erzeugen.
Im Gegensatz zu reinem Zufall (random()), der sprunghaft ist, liefert Perlin Noise weiche, zusammenhängende Übergänge. In p5.js wird die über die Funktion [noise()](https://p5js.org/reference/p5/noise/) bereitgestellt.



## Unterschied: random() vs noise()

Random

```
let x = random(100);

// Ergebnisse springen chaotisch:

12, 87, 3, 65, 91 ...
```

Perlin Noise

```
let x = noise(t);

// Ergebnisse ändern sich weich:

0.51, 0.52, 0.53, 0.54 ...

```

Dadurch eignet sich Noise perfekt für:

* organische Animationen
* Terrain-Generierung
* Wolken/Wasser
* Flow Fields
* Kamerabewegungen
* generative Kunst


## Grundidee in p5.js

Hier bewegt sich der Kreis weich horizontal.

```
let t = 0;
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(220);
  let x = noise(t) * width;
  circle(x, 200, 40);
  t += 0.01;
}

```

## Wie funktioniert noise()?

noise() akzeptiert 1D, 2D oder 3D Koordinaten.

**1D Noise:** ist gut für zeitliche Veränderungen.

```
noise(x)
```

**2D Noise:** ist ideal für Höhenkarten, Terrain und Texturen

```
noise(x, y)
```


**Beispiel:**

```
let n = noise(x * 0.01, y * 0.01);
```

Die Multiplikation mit 0.01 bestimmt die „Zoomstufe“.

**3D Noise:** für mehrdimensionale Übergange, z.B. x/y für Position und z für die Zeit.

```
noise(x, y, z)
```


## Wichtige Konzepte

### Scale / Frequency

```
noise(x * 0.01)
```

* kleine Werte → große weiche Formen
* große Werte → detailreicher / hektischer

## Animation über Zeit

Noise wird oft entlang einer Achse „gescannt“.
```
t += 0.01;
```

### Noise Seed

Mit noiseSeed() bekommt man reproduzierbare Ergebnisse:

```
noiseSeed(99);
```


**Beispiel: Terrain**

```
function setup() {
  createCanvas(400, 400);
  noLoop();
}
function draw() {
  background(0);
  for (let x = 0; x < width; x += 5) {
    let h = noise(x * 0.01) * 200;
    stroke(255);
    line(x, height, x, height - h);
  }
}

```

Das erzeugt eine organisch wirkende Landschaft.


**Beispiel: Flow Field**

Perlin Noise wird oft genutzt, um Richtungen zu erzeugen.

```
let angle = noise(x * 0.01, y * 0.01) * TWO_PI;
```

Dadurch bekommen Partikel natürliche Bewegungen.

## Fractal Noise / Octaves

p5.js unterstützt mehrere Noise-Ebenen:

```
noiseDetail(octaves, falloff);
```

**Beispiel:**

```
noiseDetail(4, 0.5);
```

* mehr Octaves → mehr Details
* Falloff → Stärke feiner Ebenen

## Typische Formel

Für Bewegung:
```
x = noise(t) * width;
y = noise(t + 1000) * height;
```
Der Offset (+1000) verhindert gleiche Werte.

## Warum Perlin Noise so beliebt ist

Weil echte Natur selten komplett zufällig ist.

Perlin Noise simuliert:

* Kontinuität
* lokale Ähnlichkeit
* organische Strukturen

Deshalb sieht vieles damit sofort natürlicher aus.


## Typische Anfängerfehler

**Zu große Schritte** wirken wieder zufällig.
 
```
t += 1;
```

Besser:

```
t += 0.01;
```


**Kein Scaling** führt oft zu extrem hektischen Mustern.

```
noise(x)
```


Besser:

```
noise(x * 0.01)
```


**Alle Achsen gleich verwenden** erzeugt eine Spiegelachse in der Darstellung, bzw. eine diagonale Bewegung.

```
x = noise(t)
y = noise(t)
```


Besser:

```
x = noise(t)
y = noise(t + 1000)
```

## Organisches Beispiel

Hier wird eine weich fließende Partikelbewegung erzeugt.

```
let t = 0;

function setup() {
  createCanvas(500, 500);
  noStroke();
}

function draw() {
  background(20, 20);
  for (let i = 0; i < 200; i++) {
    let x = noise(i * 0.1, t) * width;
    let y = noise(i * 0.1, t + 1000) * height;
    fill(255, 120);
    circle(x, y, 8);
  }
  t += 0.003;
}

```


## Gute Ressourcen

* [p5.js – noise()](https://p5js.org/reference/p5/noise/)
* [The Nature of Code](https://natureofcode.com/)
* [The Coding Train – Noise Algorithms](https://thecodingtrain.com/tracks/noise-algorithms)