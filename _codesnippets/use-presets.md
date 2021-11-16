---
titel:  Presets verwenden
autor: cn
tags: Programmiertechnik
---

Mit einem kleinen Trick kann man die GUI im Startercode Repo um Presets erweitern. Dies ist praktisch und sehr empfehlenswert, wenn man einen Sketch hat, der mit verschiedenen *DrawingParams* besonders gut wirkt. 

Hierfür wird eine neue Version der [p5.gui.min.js](https://git.coco.study/students/ws2122/df12-generative-gestaltung/startercode-ws202122/-/blob/main/assets/libs/p5.js/p5.gui.min.js) benötigt.

### Deklarationsblock

Hier fügen wir eine neue Variable an, in der wir später den Wert des aktuellen Presets speichern.

```
let currentPreset = false;
```

### DrawingsParams

Dann ergänzen wir die *DrawingParams* um ein Array mit den Namen der verschiedenen Presets.

```
let drawingParams = {
  scaleFactor: 1,
  scaleFactorMax: 20,
  saturation: 100,
  preset: ['varianteA', 'varianteB']
};
```

### Draw Function

Dann ergänzen wir die *Draw Funktion* um eine Bedingung, in der wir die Presets verarbeiten. *Zeile 01* überprüft, ob sich das Preset verändert hat. *Zeile 2* speichert das neu gewählte Preset in *currentPreset*. *Zeile 03 bis 10* verarbeitet die verschiedenen Presets und aktualisiert, falls nötig, die Regler der *DrawingParams*.

```
01  if (drawingParams.preset !== currentPreset) { 
02    currentPreset = drawingParams.preset;
03    if (drawingParams.preset === 'varianteA') { 
04      sketchGUI.update('scaleFactor', 1);
05      sketchGUI.update('saturation', 100);
06    } else if (drawingParams.preset === 'varianteB') { 
04      sketchGUI.update('scaleFactor', 5);
05      sketchGUI.update('saturation', 10);
10    }
11  }
```

{% include youtube.html id="YQp8X2PYfpc" %}

