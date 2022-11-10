---
titel:  Mit Daten arbeiten
autor: cn
tags: Programmiertechnik
---

[preload](https://p5js.org/reference/#/p5/preload)
[loadJSON](https://p5js.org/reference/#/p5/loadJSON)

```
let earthquakes;
function preload() {
  // Get the most recent earthquake in the database
  let url =
   'https://earthquake.usgs.gov/earthquakes/feed/v1.0/' +
    'summary/all_day.geojson';
    earthquakes = loadJSON(url);
}
```