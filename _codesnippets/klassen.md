---
titel:  Klassen in Javascript
autor: cn
tags: Programmiertechnik
---


## Klassen

Wenn Elemente komplexer werden, häufiger benötigt werden oder individuelle Eigenschaften haben, dann lohnt sich der Einsatz von Klassen. Die Idee ist dabei, dass man mit Hilfe der Klasse eine Art Muster oder Template erzeugt und dieses Muster dann beliebig oft nutzen, also instanzieren kann. Eine Instanz einer Klasse ist ein Objekt.

### Eine Klasse erzeugen
Die Klasse, also das Template wird wie folgt erzeugt:

```
class Ball {
  constructor( x, y ) { 
    this.x = x;
    this.y = y;
  }
}
```

Jede Klasse braucht einen Konstruktor, der beim Instanzieren der Klasse automatisch ausgeführt wird. Bei der Instanzierung können Parameter übergeben werden, die dann mit dem Schlüsselwort *this.* an das Objekt gebunden werden, sprich: sie gelten nur innerhalb dieses Objekts. In der Dev-Umgebung die wir im Kurs nutzen habe ich einen Bereich für Klassen reserviert.



### Ein Objekt erzeugen

Nun können wir eine neue Instanz/ Objekt mit Hilfe der Klasse erzeugen. In diesem Beispiel wird ein neuer *Ball* auf Basis der Klasse *Ball* erzeugt und ihm wird die aktuelle Mausposition übergeben.

```
const ball = new Ball(mouseX, mouseY);
```

Sie sehen, sie sehen nichts. Trotzdem wurde in neues Objekt erzeugt und in der Variable *ball* gespeichert. Da die Klasse aber bislang nichts zeichnet, sehen wir auch nichts. Diese Codezeile platzieren wir z.B. in der *Setup* oder *Draw* Funktion.

### Funktionen in Klassen
Klassen haben zumeist auch Funktionen, denn sie sollen ja irgendwas machen. In unserem Beispiel soll die etwas zeichnen, daher spendieren wir der Klasse noch die Funktion *zeichnen*:

```
class Ball {
  constructor( x, y ) { 
    this.x = x;
    this.y = y;
    this.size = 20;
    this.fill = 255;
  }
  zeichnen(){
    fill(255);
    ellipse(this.x, this.y, this.size);
  }
}
```

Diese Funktion müssen wir aber auch in der *Draw* Funktion aufrufen:

```
ball.zeichnen();
```



### Viele Instanzen mit Arrays

Meistens setzen wir Klassen ein, wenn wir viele Objekte erzeugen wollen. Für unsere Zwecke benötigen wir hier zumeist Arrays. Wir legen also zunächst ein leeres Array im Deklarationsbereich (gaaaaanz oben) unseres Skripts an:

```
const balls = [];
```

Jetzt würden wir neue Objekte diesem Array hinzugüfügen, z.B. beim Mausklick. Hierfür ist in unserer Dev-Umgebung schon eine entsprechende Funktion vorbereitet.

```
function mouseReleased() {
  balls.push(new Ball(mouseX, mouseY));
}
```

Dann hätten wir bei jedem Klick das Array *balls* um eine neue Instanz von *Ball* ergänzt. Jetzt müssen wir in der *Draw* Funktion jeweils für alle Elements in *balls* die *zeichnen* Funktion aufrufen:

```
balls.forEach(
    function (ball) { 
      ball.zeichnen();
    }
);
```

Weitere Information finden Sie in den [MDN WebDocs](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Klassen) und bei [Dan Shiffmanns COding Train](https://www.youtube.com/watch?v=xG2Vbnv0wvg&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&t=0s).