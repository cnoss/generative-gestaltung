---
titel: External Input
tags: Kontext
---

## C5 Bilddaten
Nutzung eines Bildes als Datenquelle. Dazu nehmen wir ein bestehendes Foto, laden es in P5, vergröbern die Auflösung, anaysieren die Pixel und zeichnen das Bild zunächst mit Punkten nach. Die Punktgröße sollte minimal 3px sein, sonst wird der Rechner etwas zu warm. Der Canvas sollte aus gleichem Grund die Klasse *is-fixed* haben. Danach sind folgende Ergänzungen im Code erforderlich:

**Bild vorladen**
```
function preload() {
  loadImage('img/farbig.jpg', setImage);
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
let px = int(gridX * rectSize);
let py = int(gridY * rectSize);
let i = (py * img.width + px) * 4;
fill(img.pixels[i], img.pixels[i+1], img.pixels[i+2], 255);
```

## C6 Daten vom Smartphone via Tramontana
Via [Tramonata](https://tramontana.xyz/tramontanajavascriptgettingstarted_2_2) verknüpfen wir unseren Sketch mit dem Smartphone. Das ist recht einfach, aber schlecht dokumentiert. Wir müssen zunächst die [Tramontana App](https://tramontana.xyz/) auf unserem Smartphone installieren und das Smartphone und der Rechner müssen im gleichen Netzsegment sein. Die p5.js Unterstützung ist gerade mal zwei Monate alt. Daher sind [Dokumentation](https://github.com/pierdr/Tramontana-for-Javascript) und Beispiele noch sehr rudimentär.

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