/* ----------------------------------------------------------------------------
helper.js                                                                
Enthält ein paar kleine Helferlein für die Sketches in Generative Gestaltung. 
Kurs «Generative Gestaltung» an der TH Köln
Christian Noss
christian.noss@th-koeln.de
https://twitter.com/cnoss
https://cnoss.github.io/generative-gestaltung/
----------------------------------------------------------------------------*/


/* Config & Vars
----------------------------------------------------------------------------*/

let wrapGlobals = {
  nav: document.getElementById("nav"),
  canvas: document.getElementById("canvas"),
  console: document.getElementById("console"),
  consoleStates: 
    [
      'is-standard',
      'is-fullscreen',
      'is-16by9',
      'is-small',
      'is-large'
    ]
};



/* Functions
----------------------------------------------------------------------------*/

function navElements () { 
  let data = {};
  data.previous = false;
  data.next = false;
  
  function checkWrap() { 
    let navWrap = document.querySelector("#nav-wrap");
    if (navWrap === null) {
      let navWrap = document.createElement("div");
      navWrap.setAttribute("id", "nav-wrap");
      navWrap.classList.add("nav-wrap");
      var mainNav = document.getElementById("nav");
      mainNav.appendChild(navWrap);
      return document.querySelector("#nav-wrap");
    } else { 
      return navWrap;
    }
  }

  function generateNavitem(type, target) { 

    let navWrap = checkWrap();
    
    let navItem = document.createElement("div");
    navItem.classList.add("nav-item");
    navItem.classList.add(type);
    navItem.setAttribute("id", "nav-item-" + type);
    
    /* Info Toggling */
    let infoButton = document.createElement("i");
    infoButton.setAttribute("class", "material-icons button");
    infoButton.addEventListener("click", function () { 
      wrapGlobals.console.classList.toggle('active');
      this.classList.toggle('active');
    }, false);

    let icon = document.createTextNode("info"); 
    infoButton.appendChild(icon);
    navItem.appendChild(infoButton);

    /* Canvas Size Toggling */
    canvasSizeButton = document.createElement("i");
    canvasSizeButton.setAttribute("class", "material-icons button");
    canvasSizeButton.addEventListener("click", function () {
      let nextIndex = false;
      wrapGlobals.consoleStates.forEach(function(state, index) {
        if(wrapGlobals.canvas.classList.contains(state)){
          wrapGlobals.canvas.classList.remove(state);
          nextIndex = index +1;
        }
      });
      let newCanvasState = (wrapGlobals.consoleStates[nextIndex]) ? wrapGlobals.consoleStates[nextIndex] : wrapGlobals.consoleStates[0];
      wrapGlobals.canvas.classList.add(newCanvasState);
      resizeMyCanvas();
    }, false);

    icon = document.createTextNode("fullscreen"); 
    canvasSizeButton.appendChild(icon);
    navItem.appendChild(canvasSizeButton);
    
    navWrap.appendChild(navItem);
    
  }
  this.init = function() { 
    generateNavitem("toggleConsole", "#console"); 
  }
}




/* Main
----------------------------------------------------------------------------*/

let nav = new navElements();
nav.init();