---
titel:  Farben der GUI anpassen
autor: cn
tags: Helper
---

Es gab Beschwerden über die Farbe der GUI :) Um diese anpassen zu können hat Matthias Marx freundlicherweise einen Workaround geschrieben und via Codepen bereit gestellt:
[CodePen zum Anpassen der GUI Farben](https://codepen.io/mmarx54/pen/WNEyBge?editors=1010)

## In der *index.html* einsetzen

Einfach den folgenden Codeschnippsel in die index.html vor den < /head> Tag setzen.

```
  <style>
    .qs_main {
        color: var(--textColor) !important;
    }
    body .material-icons {
      color: var(--textColor) !important;
    }
    .qs_main input[type='range' i] {
      background: var(--rangeBackground);
    }
    .qs_main input[type='range']::-webkit-slider-thumb {
      background: var(--rangeBtnBackground);
    }
    body .qs_content {
        background-color: var(--paramSectionBackground);
    }
  </style>
```

## In der *sketch.js* einsetzen

Den Javascript Code irgendwo in den Sketch setzen und dort die Farben anpassen. Am schönsten wäre natürlich irgendwo am Anfang ;)

```
// Style the Parameter Bar
let parameterStyling =  {
  textColor: {
    color: '#9313ce', // Color for Text
    cssVariable: '--textColor' // do not change this
  },
  rangeSliderBtn: {
    color: '#9313ce', // Bg-Color for Range Button
    cssVariable: '--rangeBtnBackground'  // do not change this
  },
  rangeSliderBackground: {
    color: 'rgba(255,255,255,.05)', // Background of the Slider
    cssVariable: '--rangeBackground' // do not change this
  },
  backgroundFullSection: {
    color: 'rgba(120,120,120,0.1)', // Background of the full Parameter Section
    cssVariable: '--paramSectionBackground' // do not change this
  }
}

// Set them to HTML Index
for(let i in parameterStyling) {
  let paramStyle = parameterStyling[i];
  document.documentElement.style.setProperty(paramStyle.cssVariable, `${paramStyle.color}`);
}
```


