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

  const mc0Md = new Media(mc0, false, false, null, 20, 10, 20, 23.7);
  const mc1Md = new Media(mc1, false, true, null, 40, 15, 20, 50.55);
  const mc2Md = new Media(mc2, false, false, null, 65, 10, 20, 64.54);
  const mc3Md = new Media(mc3, false, false, null, 10, 60, 20, 35.56);
  const mc4Md = new Media(mc4, false, true, null, 75, 75, 20, 23.43);
  const mc5Md = new Media(mc5, false, false, null, 35, 70, 20, 20);
  const mc6Md = new Media(mc6, false, true, null, 5, 30, 20, 20.19);
  const mcBoard = new BoardWithMedias([mc0Md, mc1Md, mc2Md, mc3Md, mc4Md, mc5Md, mc6Md]);

  corkBoard.addEventListener("click", function() {
    if (notesList[Object.keys(notesList)[0]][1] == "acting") {
      mcBoard.showAll();
    }
  });

  closeCross.addEventListener("click", function() {
    const mcList = [mc0, mc1, mc2, mc3, mc4, mc5, mc6];
    for (let i = 0; i < 7; ++i) {
      imageParams(mcList[i], 0, 0, 0, 0);
    }
  });
  
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
