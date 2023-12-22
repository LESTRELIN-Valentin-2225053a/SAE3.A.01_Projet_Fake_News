document.addEventListener("DOMContentLoaded", function() {
  
  var t = 20000;
  const cBCoords = [25, 10, 50, 50];
  
  function dimensions() {
    mainContainer.style.height = window.innerHeight + "px";
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
