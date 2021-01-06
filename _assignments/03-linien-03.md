---
titel: Linien, Level 3 – Interaktion mit der Maus
tags: Linie
---

## L5 Ausgerichtete Linien
Erzeugen Sie ein Raster aus Linien oder Linienformationen und richten Sie es dynamisch auf die Mausposition aus. Bei der Berechnung des Winkels könnte folgender Code helfen:

```
let angle = atan2(mouseY - y, mouseX - x);
```
