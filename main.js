document.addEventListener("DOMContentLoaded", function() {
  const mainContainer = document.getElementById("main-container");
  const iutLogo = document.getElementById("IUTLogo");
  const creatorsText = document.getElementById(
    "creatorsText");
  const forText = document.getElementById("forText");
  const marsactuLogo = document.getElementById("MarsactuLogo");

  function dimensions() {
    mainContainer.style.height = window.innerHeight + "px";
  }

  function imageParams(image, x, y, w, h) { document.addEventListener("DOMContentLoaded", function() {
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
  var t = 20000;

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

  function detectElement(elmnt) {
    elmnt.addEventListener("mouseover", function() {
      imgsOpct([elmnt], "0.75");
    });
    elmnt.addEventListener("mouseout", function() {
      imgsOpct([elmnt], "1");
    });
  }
  /*
  function clickOnElement(elmnt) {
    elmnt.addEventListener("click" {
      
    });
  }
  */
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
  imageParams(corkBoard, 30, 20, 50, 50);
  imageParams(computer, 25, 50, 40, 40);
  imageParams(shelf, 84, -15, 16, 100);
  
  detectElement(computer);
  detectElement(shelf);
  //clickOnElement(computer, displayRoom());
  //clickOnElement(corkBoard, displayRoom());

  //rectParams(obscurity, 0, 0);
  
  function displayRoom() {
    let movesNb = 0;
    let speed = 0.25;
    let paradesNb = 0;
    let imgsX = [movingImg0[0], movingImg1[0]];
    let intervalId;
    imgsOpct([titleBottomRect, titleExamples0, titleExamples1, titleUpRect, fekniouzeLogo, startText, imgsSubtitle], "0");
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
    image.style.position = "absolute";
    image.style.left = x + '%';
    image.style.top = y + '%';
    image.style.width = w + '%';
    image.style.height = h + '%';
    image.style.opacity = "0";
    mainContainer.appendChild(image);
  }

  function textParams(text, r, g, b, font, x, y, w, h) {
    text.style.color = `rgb(${r},${g},${b})`;
    text.style.fontSize = '3vw';
    text.style.fontFamily = font;
    text.style.position = "absolute";
    text.style.left = x + '%';
    text.style.top = y + '%';
    text.style.width = w + '%';
    text.style.height = h + '%';
    text.style.opacity = "0";
    mainContainer.appendChild(text);
  }

  dimensions();
  window.addEventListener("resize", dimensions);

  imageParams(iutLogo, 25, 20, 50, 30);
  textParams(creatorsText, 0, 0, 0, "Arial", 25, 50, 50, 30);
  textParams(forText, 0, 0, 0, "Arial", 25, 20, 50, 30);
  imageParams(marsactuLogo, 25, 30, 50, 30);
 
  setTimeout(() => {
    iutLogo.style.opacity = "1";
    creatorsText.style.opacity = "1";
    setTimeout(() => {      
      iutLogo.style.opacity = "0";
      creatorsText.style.opacity = "0";
    }, 11000);
  }, 1000);

  setTimeout(() => {
    forText.style.opacity = "1";
    marsactuLogo.style.opacity = "1";
    setTimeout(() => {      
      forText.style.opacity = "0";
      marsactuLogo.style.opacity = "0";
    }, 21000);
  }, 11000);
});
