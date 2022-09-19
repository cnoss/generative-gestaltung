---
titel: External Input
tags: Kontext
---

## C5 Bilddaten
Nutzung eines Bildes als Datenquelle. Dazu nehmen wir ein bestehendes Foto, laden es in P5, vergröbern die Auflösung, anaysieren die Pixel und zeichnen das Bild zunächst mit Punkten nach. Die Punktgröße sollte minimal 3px sein, sonst wird der Rechner etwas zu warm. Der Canvas sollte aus gleichem Grund die Klasse *is-fixed* haben. Danach sind folgende Ergänzungen im Code erforderlich:

**Variable im Deklarationsblock anlegen**
```
let img;
```

**Bild vorladen**

Hierfür nutzen wir die p5.js Funktion [preload](https://p5js.org/reference/#/p5/preload). Dafür muss natürlich ein Bild im *images* Verzeichnis liegen.
```
function preload() {
  loadImage('images/farbig.jpg', setImage);
}
```

**Bild skalieren und bereit stellen**
```
function setImage(loadedImageFile) {
  img = loadedImageFile;
  img.resize(500, 0);
}
```

**Pixelwerte akquirieren**
```
const pixelSize = 10;
const tileCount = floor(width / pixelSize);
const rectSize = width / tileCount;

img.loadPixels();
  
for (let gridX = 0; gridX < tileCount; gridX++) {
  for (let gridY = 0; gridY < tileCount; gridY++) {
    const px = int(gridX * rectSize);
    const py = int(gridY * rectSize);
    const i = (py * img.width + px) * 4;
    
    fill(img.pixels[i], img.pixels[i+1], img.pixels[i+2], 255);
    ellipse(gridX * rectSize, gridY * rectSize, pixelSize);
  }
}
```

{% include youtube.html id="Ge5Cqv7Zvd0" %}

## C6 Daten vom Smartphone via Tramontana
Via [Tramonata](https://tramontana.xyz/tramontanajavascriptgettingstarted_2_2) verknüpfen wir unseren Sketch mit dem Smartphone. Das ist recht einfach, aber schlecht dokumentiert. Wir müssen zunächst die [Tramontana App](https://tramontana.xyz/) auf unserem Smartphone installieren und das Smartphone und der Rechner müssen im gleichen Netzsegment sein. Die p5.js Unterstützung ist gerade mal zwei Monate alt. Daher sind [Dokumentation](https://github.com/pierdr/Tramontana-for-Javascript) und Beispiele noch sehr rudimentär. 

Im Startercode muss in der *index.html* der *Tramontana* Codeblock einkommentiert werden.

**Tramontana remote verbinden**
```
device.start("IP_ADRESSE_DIE_AUF_DEM_GERAET_GEZEIGT_WIRD", function (e) {
  if (e == undefined) {
    device.makeVibrate();
    device.subscribeAttitude( 60 ,function(ip,e){
      drawingParams.deviceData.r = e.r;
      drawingParams.deviceData.y = e.y;
      drawingParams.deviceData.p = e.p;
      // e.r = roll (x)
      // e.y = yaw (y)
      // e.p = pitch (z)
      // console.log(e);
    });
    device.subscribeDistance(function(ip, e) { 
      drawingParams.deviceData.distance = e;
      // console.log(e);
    });      
  } else { 
    console.log(e);
  }
});
```

**Daten verwerten**
```
let x = map(drawingParams.deviceData.r, 0, 3, 0, width / 2);
let y = map(drawingParams.deviceData.p, 0, 1.5, 0, height / 2);
let bg = map(drawingParams.deviceData.y, 0, 1.5, 0, 255);
background(bg);
ellipse(x, y, 20);
```


## C7 Externe Daten
Bei dieser Aufgabe geht es darum externe Daten in den Sketch zu integrieren. Hierzu eignen sich vor allem Daten im [JSON Format](https://www.json.org/json-de.html). Hierzu gibt es ein kleines Beispiel in der p5.js Doku zur Funktion [loadJSON](https://p5js.org/reference/#/p5/loadJSON). 

Als Beispieldaten werden hier [seismische Messungen](https://earthquake.usgs.gov/earthquakes/feed/) genutzt. 

## Beispiele & Beispieldatensätze
- [Repo von Christian Faubel mit den Beispiel Sketches](https://git.coco.study/cfaubel1/startercode-2020/-/tree/master/sketches)
- [Seismische Daten im GeoJSON](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php)
- [Data on COVID-19 (coronavirus) by Our World in Data](https://github.com/owid/covid-19-data/tree/master/public/data)
- [Weather Beispiel von der p5.js Seite](https://p5js.org/examples/hello-p5-weather.html)
