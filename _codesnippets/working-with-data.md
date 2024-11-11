---
titel:  Mit Daten arbeiten
autor: cn
tags: Programmiertechnik
---

Wenn wir (externe) Daten nutzen wollen, müssen wir diese erst mal laden. Das sollte passieren, bevor der Sketch irgendetwas anderes macht. Dafür gibt es in p5.js die [Preload Funktion](https://p5js.org/reference/p5/preload). Diese wird noch vor der Setup Funktion ausgeführt. Innerhalb der Preload Funktion die Daten via [loadJSON](https://p5js.org/reference/p5/loadJSON) laden. Die Daten müssen dafür im [JSON Format](https://www.json.org/json-de.html) vorliegen. 

Hier finden Sie ein bisschen [Beispielcode](https://github.com/cnoss/p5-working-with-data-example).

```
let earthquakes;

function preload() {
  // Get the most recent earthquake in the database
  let url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';
    
  earthquakes = loadJSON(url);
}
```