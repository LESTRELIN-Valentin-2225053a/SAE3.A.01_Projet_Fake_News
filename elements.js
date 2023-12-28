const mainContainer = document.getElementById("main-container");

const elementsList = ["iutLogo", "creatorsText", "forText", "marsactuLogo",
                     "titleBottomRect", "titleExamples0", "titleExamples1",
                     "titleUpRect", "fekniouzeLogo", "startText",
                     "imgsSubtitle", "whiteWall", "desk", "corkBoard",
                     "computer", "shelf", "obscurity", "closeCross",
                     "computerScreen", "note", "leftArrow", "rightArrow",
                     "playButton", "resumeButton", "doneButton",
                     "currentNoteText", "vrai", "faux", "vraiFaux",
                     "mcThumbnail", "mc0", "mc1", "mc2", "mc3", "mc4", "mc5", "mc6",
                     "gWT0", "gWT1", "gWT2", "gWT3",
                     "tTThumbnail", "tT0", "tT1", "tT2", "tT3", "tT4", "tT5", "tT6",
                     "fWThumbnail",
                     "ivThumbnail", 
                     "cTThumbnail", 
                     "sOThumbnail",
                     "c19Thumbnail"];

for (let i = 0; i < elementsList.length; ++i) {
  eval('const ' + elementsList[i] + ' = document.getElementById("' + elementsList[i] + '")');
}

function imageParams(image, x, y, w, h) { 
  image.style.position = "absolute";
  image.style.left = x + "%";
  image.style.top = y + "%";
  image.style.width = w + "%";
  image.style.height = h + "%";
  image.style.opacity = "0";
  mainContainer.appendChild(image);
  return [x, y, w, h];
}

function textParams(text, r, g, b, font, x, y, w, h, vwFontSize) {
  text.style.color = `rgb(${r},${g},${b})`;
  text.style.fontFamily = font;
  text.style.position = "absolute";
  text.style.left = x + "%";
  text.style.top = y + "%";
  text.style.width = w + "%";
  text.style.height = h + "%";
  text.style.fontSize = vwFontSize + "vw";
  text.style.opacity = "0";
  mainContainer.appendChild(text);
}

function rectParams(shape, x, y) {
  shape.style.left = x + "%";
  shape.style.top = y + "%";
  shape.style.opacity = "0";
  mainContainer.appendChild(shape);
}

function imgsOpct(imgsList, trspStrValue) {  
  for (let i = 0; i < imgsList.length; ++i) {
    imgsList[i].style.opacity = trspStrValue;
  }
}
