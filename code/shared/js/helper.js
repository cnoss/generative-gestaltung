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

let helperGlobals = {
  nav: document.getElementById("nav"),
  canvas: document.getElementById("canvas"),
  console: document.getElementById("console"),
  consoleStates: 
    [ 
      'is-fixed',
      'is-standard',
      'is-fullscreen',
      'is-16by9',
      'is-small',
      'is-large'
    ]
};



/* Functions
----------------------------------------------------------------------------*/

function helperPrettifyLogs(data) {
  return JSON.stringify(data).replace(/{|}|"/g, "").replace(/,/g, " // ");
}

function helperNavElements() {
  
  function pimpConsole() { 
    let drawingParams = document.createElement("p");
    drawingParams.setAttribute("id", "drawingParams");
    helperGlobals.console.appendChild(drawingParams);

    let canvasParams = document.createElement("p");
    canvasParams.setAttribute("id", "canvasParams");
    helperGlobals.console.appendChild(canvasParams);
  }

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

  function generateNavitems() { 

    let navWrap = checkWrap();
    
    let navItem = document.createElement("div");
    navItem.classList.add("nav-item");
    navItem.classList.add("button");
    navItem.setAttribute("id", "nav-item-button");
    
    /* Info Toggling */
    let infoButton = document.createElement("i");
    infoButton.setAttribute("class", "material-icons button");
    infoButton.addEventListener("click", function () { 
      helperGlobals.console.classList.toggle('active');
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
      helperGlobals.consoleStates.forEach(function(state, index) {
        if(helperGlobals.canvas.classList.contains(state)){
          helperGlobals.canvas.classList.remove(state);
          nextIndex = index +1;
        }
      });
      let newCanvasState = (helperGlobals.consoleStates[nextIndex]) ? helperGlobals.consoleStates[nextIndex] : helperGlobals.consoleStates[0];
      canvasParams.state = newCanvasState;
      helperGlobals.canvas.classList.add(newCanvasState);
      resizeMyCanvas();
    }, false);

    icon = document.createTextNode("fullscreen"); 
    canvasSizeButton.appendChild(icon);
    navItem.appendChild(canvasSizeButton);
    
    navWrap.appendChild(navItem);
    
  }
  this.init = function () { 
    pimpConsole();
    generateNavitems(); 
  }
}




/* Main
----------------------------------------------------------------------------*/

let navHelper = new helperNavElements();
navHelper.init();