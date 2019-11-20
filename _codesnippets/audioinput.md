---
titel:  Audio Input
autor: cn
tags: Kontext
---


{% include youtube.html id="v4jgr0ppw8Q" %}


Mindestens ein Teilnehmer und ich hatten Probleme beim Audio Input. Das Problem hierbei ist, dass hierzu die [Web Audio API](https://developer.mozilla.org/de/docs/Web/API/Web_Audio_API) genutzt wird, die speziellen Sicherheitsrichtlinien unterworfen ist. Eine davon ist die Nutzung von *https*. Das Video oben zeigt, wie eine *https* Verbindung für die Live Server Extension von Visual Studio Code erzeugt werden kann. Bei mir hat dies, in Kombination mit der Nutzung von [Firefox](https://www.mozilla.org/de/firefox/new/) geholfen.

