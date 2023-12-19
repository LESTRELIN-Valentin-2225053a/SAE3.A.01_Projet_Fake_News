document.addEventListener("DOMContentLoaded", function() {
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
  
  var t = 20000;
  const cBCoords = [25, 10, 50, 50];
  var notesList = {"Macron ou non ?" : [mcThumbnail, "todo"], //todo, acting, done
                   "Trump et le réchauffement climatique" : [tTThumbnail, "todo"],
                   "Les sites frauduleux" : [fWThumbnail, "todo"],
                   "Vérification des faits d'un entretien" : [ivThumbnail, "todo"],
                   "Texte à trous" : [cTThumbnail, "todo"],
                   "Série de photos et vidéos" : [sOThumbnail, "todo"],
                   "Covid-19" : [c19Thumbnail, "todo"]
                   };
  var noteIndex = 0;
  
  function dimensions() {
    mainContainer.style.height = window.innerHeight + "px";
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

  function displayNoteButton(notesListKey) {
    imageParams(playButton, 100, 100, 5.21, 9.26);
    imageParams(resumeButton, 100, 100, 5.21, 9.26);
    imageParams(doneButton, 100, 100, 5.21, 9.26);
    imgsOpct([playButton, resumeButton, doneButton], "0");
    
    if (notesList[notesListKey][1] == "todo") {
      imageParams(playButton, 47.4, 85, 5.21, 9.26);
      imgsOpct([playButton], "1");
      detectElement(playButton);
    }
    else if (notesList[notesListKey][1] == "acting") {
      imageParams(resumeButton, 47.4, 85, 5.21, 9.26);
      imgsOpct([resumeButton], "1");
      detectElement(resumeButton);
    }
    else if (notesList[notesListKey][1] == "done") {
      imageParams(doneButton, 47.4, 85, 5.21, 9.26);
      imgsOpct([doneButton], "1");
      detectElement(doneButton);
    }
  }

  function displayCurrentNoteText(noteTitle) {
    currentNoteText.innerText = noteIndex + 1 + "/" + Object.keys(notesList).length + " " + noteTitle;
    textParams(currentNoteText, 150, 0, 0, "Helvetica", 37.5, 10, 25, 8, 1.5);
    imgsOpct([currentNoteText], "1");
  }

  function detectElement(elmnt) {
    elmnt.addEventListener("mouseover", function() {
      imgsOpct([elmnt], "0.75");
    });
    elmnt.addEventListener("mouseout", function() {
      imgsOpct([elmnt], "1");
    });
  }
  
  function clickOnElement(elmnt) {
    if (elmnt == computer || elmnt == shelf || elmnt == corkBoard) {
      elmnt.addEventListener("click", function() {
        rectParams(obscurity, 0, 0);
        imgsOpct([obscurity], "0.75");
        imageParams(closeCross, 0, 0, 3.65, 6.48);
        imgsOpct([closeCross], "1");
        detectElement(closeCross);
        if (elmnt == computer) {
          imageParams(computerScreen, 20, 20, 60, 60);
          imgsOpct([computerScreen], "1");
        }
        if (elmnt == shelf) {
          imageParams(note, 37.5, 18.52, 25, 62.96);
          imageParams(leftArrow, 25, 44.9, 3.65, 10.19);
          imageParams(rightArrow, 71.35, 44.9, 3.65, 10.19);
          imgsOpct([note, leftArrow, rightArrow], "1");
          displayNoteButton(Object.keys(notesList)[noteIndex]);
          displayCurrentNoteText(Object.keys(notesList)[noteIndex]);
        
        }
      });
    }
    if (elmnt == leftArrow) {
      elmnt.addEventListener("click", function() {
        --noteIndex;
        if (noteIndex == -1) {
          noteIndex = Object.keys(notesList).length - 1;
        }
        displayNoteButton(Object.keys(notesList)[noteIndex]);
        displayCurrentNoteText(Object.keys(notesList)[noteIndex]);
      });
    }
    if (elmnt == rightArrow) {
      elmnt.addEventListener("click", function() {
        ++noteIndex;
        if (noteIndex == Object.keys(notesList).length) {
          noteIndex = 0;
        }
        displayNoteButton(Object.keys(notesList)[noteIndex]);
        displayCurrentNoteText(Object.keys(notesList)[noteIndex]);
      });
    }
    if (elmnt == playButton) {
      elmnt.addEventListener("click", function() {
        for (let i = 0; i < Object.keys(notesList).length; ++i) {
          if (notesList[Object.keys(notesList)[i]][1] == "acting") {
            notesList[Object.keys(notesList)[i]][1] = "todo";
          }
        }
        notesList[Object.keys(notesList)[noteIndex]][1] = "acting";
        displayNoteButton(Object.keys(notesList)[noteIndex]);
      });
    }
    if (elmnt == resumeButton) {
      elmnt.addEventListener("click", function() {
        notesList[Object.keys(notesList)[noteIndex]][1] = "todo";
        displayNoteButton(Object.keys(notesList)[noteIndex]);
      });
    }
    if (elmnt == closeCross) {
      elmnt.addEventListener("click", function() {
        imgsOpct([closeCross, computerScreen, note, leftArrow, rightArrow, playButton, resumeButton, doneButton, obscurity], "0");
        imageParams(closeCross, 100, 100, 3.65, 6.48);
        imageParams(computerScreen, 100, 100, 60, 60);
        imageParams(note, 100, 100, 25, 62.96);
        imageParams(leftArrow, 100, 100, 3.65, 10.19);
        imageParams(rightArrow, 100, 100, 3.65, 10.19);
        imageParams(playButton, 100, 100, 5.21, 9.26);
        imageParams(resumeButton, 100, 100, 5.21, 9.26);
        imageParams(doneButton, 100, 100, 5.21, 9.26);
        textParams(currentNoteText, 150, 0, 0, "Helvetica", 100, 100, 25, 8, 1.5);
        rectParams(obscurity, 100, 100);
      });
    }
  }

  const cBImages = {"Macron" : [[macron0, 20, 10, 20, 28.44],
                                [macron1, 60, 20, 20, 13.33],
                                [macron2, 30, 50, 20, 36.3],
                                [macron3, 50, 60, 20, 20]]
                   };

  function displayCBImages(key) {
    for (let i = 0; i < cBImages[key].length; ++i) {
      imageParamscBImages[key][i];
    }
  }
  
  dimensions();
  window.addEventListener("resize", dimensions);

  imageParams(iutLogo, 15, 20, 70, 30);
  textParams(creatorsText, 0, 0, 0, "Arial", 25, 50, 50, 30, 3);
  textParams(forText, 0, 0, 0, "Arial", 25, 20, 50, 30, 3);
  imageParams(marsactuLogo, 25, 30, 50, 30);
  rectParams(titleBottomRect, 0, 80);
  movingImg0 = imageParams(titleExamples0, 0, 0, 100, 80);
  movingImg1 = imageParams(titleExamples1, 100, 0, 100, 80);
  rectParams(titleUpRect, 0, 0);
  imageParams(fekniouzeLogo, 10, 40, 80, 20);
  textParams(startText, 150, 150, 150, "Helvetica", 37.5, 60, 25, 12.5, 5);
  textParams(imgsSubtitle, 150, 150, 0, "Helvetica", 25, 85, 100, 5, 2);
  
  imageParams(whiteWall, 0, 0, 100, 100);
  imageParams(desk, 0, 75, 100, 25);
  
  detectElement(computer);
  detectElement(shelf);
  detectElement(corkBoard);
  detectElement(leftArrow);
  detectElement(rightArrow);
  clickOnElement(computer);
  clickOnElement(shelf);
  clickOnElement(corkBoard);
  clickOnElement(leftArrow);
  clickOnElement(rightArrow);
  clickOnElement(playButton);
  clickOnElement(resumeButton);
  clickOnElement(closeCross);

  
  
  function displayRoom() {
    let movesNb = 0;
    let speed = 0.25;
    let paradesNb = 0;
    let imgsX = [movingImg0[0], movingImg1[0]];
    let intervalId;
    imgsOpct([titleBottomRect, titleExamples0, titleExamples1, titleUpRect, fekniouzeLogo, startText, imgsSubtitle], "0");

    imageParams(corkBoard, cBCoords[0], cBCoords[1], cBCoords[2], cBCoords[3]);
    imageParams(computer, 25, 50, 40, 40);
    imageParams(shelf, 84, -15, 16, 100);
    imgsOpct([whiteWall, desk, corkBoard, computer, shelf], "1");
    //imgsOpct([obscurity], "0.5");
  }
  
  setTimeout(() => {
    imgsOpct([iutLogo, creatorsText], "1");
    setTimeout(() => {      
      imgsOpct([iutLogo, creatorsText], "0");
    }, 5000);
    setTimeout(() => {
      console.log("texte");
    }, 2000);
  }, 1000);

  setTimeout(() => {
    imgsOpct([forText, marsactuLogo], "1");
    displayRoom();
    setTimeout(() => {      
      imgsOpct([forText, marsactuLogo], "0");
    }, 5000);
  }, 6000);

  setTimeout(() => {
    mainContainer.style.backgroundColor = "#ffffff";
    imgsOpct([titleBottomRect, titleExamples0, titleExamples1, fekniouzeLogo, startText, imgsSubtitle], "1");
    imgsOpct([titleUpRect], "0.5");
    let movesNb = 0;
    let speed = 0.25;
    let paradesNb = 0;
    let imgsX = [movingImg0[0], movingImg1[0]];
    const intervalId = setInterval(() => {
      titleExamples0.style.left = imgsX[paradesNb % 2] - (movesNb % (100 / speed)) * speed + "%";
      titleExamples1.style.left = imgsX[1 - (paradesNb % 2)] - (movesNb % (100 / speed)) * speed + "%";
      movesNb++; 
      if (movingImg0[0] - (movesNb % (100 / speed)) * speed == 0) {
        movesNb = 0;
        ++paradesNb;
      }
    }, 10);
  }, 12000); 

});
