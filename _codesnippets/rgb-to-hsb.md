---
titel:  RGB in HSB umrechnen
autor: cn
tags: Tools
---

Diese Funktion basiert auf folgender [Lösung](https://www.30secondsofcode.org/js/s/rgb-to-hsb).

```
function RGBtoHSB(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  const v = Math.max(r, g, b),
    n = v - Math.min(r, g, b);
  const h =
    n === 0 ? 0 : n && v === r ? (g - b) / n : v === g ? 2 + (b - r) / n : 4 + (r - g) / n;
  
  const hsb = {};
  hsb.h = 60 * (h < 0 ? h + 6 : h);
  hsb.s = v && (n / v) * 100;
  hsb.b = v * 100;
  
  return hsb;
}
```