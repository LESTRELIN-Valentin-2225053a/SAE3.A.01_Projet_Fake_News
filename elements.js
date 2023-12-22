const mainContainer = document.getElementById("main-container");

const iutLogo = document.getElementById("iutLogo");
const creatorsText = document.getElementById("creatorsText");
const forText = document.getElementById("forText");
const marsactuLogo = document.getElementById("marsactuLogo");

const titleBottomRect = document.getElementById("titleBottomRect");
const titleExamples0 = document.getElementById("titleExamples0");
const titleExamples1 = document.getElementById("titleExamples1");
const titleUpRect = document.getElementById("titleUpRect");
const fekniouzeLogo = document.getElementById("fekniouzeLogo");
const startText = document.getElementById("startText");
const imgsSubtitle = document.getElementById("imgsSubtitle");

const whiteWall = document.getElementById("whiteWall");
const desk = document.getElementById("desk");
const corkBoard = document.getElementById("corkBoard");
const computer = document.getElementById("computer");
const shelf = document.getElementById("shelf");
const obscurity = document.getElementById("obscurity");
const closeCross = document.getElementById("closeCross");
const computerScreen = document.getElementById("computerScreen");
const note = document.getElementById("note");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const playButton = document.getElementById("playButton");
const resumeButton = document.getElementById("resumeButton");
const doneButton = document.getElementById("doneButton");
const currentNoteText = document.getElementById("currentNoteText");

const mcThumbnail = document.getElementById("mcThumbnail");
const tTThumbnail = document.getElementById("tTThumbnail");
const fWThumbnail = document.getElementById("fWThumbnail");
const ivThumbnail = document.getElementById("ivThumbnail");
const cTThumbnail = document.getElementById("cTThumbnail");
const sOThumbnail = document.getElementById("sOThumbnail");
const c19Thumbnail = document.getElementById("c19Thumbnail");

const macron0 = document.getElementById("macron0");
const macron1 = document.getElementById("macron1");
const macron2 = document.getElementById("macron2");
const macron3 = document.getElementById("macron3");

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
