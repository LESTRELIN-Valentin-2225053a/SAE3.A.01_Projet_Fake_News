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

  const mc0Md = new Media(mc0, false, false, null, 20, 10, 20, 23.7, txtDict["mc0Md"]);
  const mc1Md = new Media(mc1, false, true, null, 40, 15, 20, 50.55, txtDict["mc1Md"]);
  const mc2Md = new Media(mc2, false, false, null, 65, 10, 20, 64.54, txtDict["mc2Md"]);
  const mc3Md = new Media(mc3, false, false, null, 10, 60, 20, 35.56, txtDict["mc3Md"]);
  const mc4Md = new Media(mc4, false, true, null, 75, 75, 20, 23.43, txtDict["mc4Md"]);
  const mc5Md = new Media(mc5, false, false, null, 35, 70, 20, 20, txtDict["mc5Md"]);
  const mc6Md = new Media(mc6, false, true, null, 5, 30, 20, 20.19, txtDict["mc6Md"]);
  const mcBoard = new BoardWithMedias([mc0Md, mc1Md, mc2Md, mc3Md, mc4Md, mc5Md, mc6Md]);

  const gWT0Md = new Media(gWT0, false, true, null, 0, 20, 25, 60, "");
  const gWT1Md = new Media(gWT1, false, false, null, 25, 20, 25, 60, "");
  const gWT2Md = new Media(gWT2, false, false, null, 50, 20, 25, 60, "");
  const gWT3Md = new Media(gWT3, false, false, null, 75, 20, 25, 60, "");
  const gWTBoard = new BoardWithMedias([gWT0Md, gWT1Md, gWT2Md, gWT3Md]);

  const tT0Md = new Media(tT0, false, null, null, 5, 10, 30, 20, "");
  const tT1Md = new Media(tT1, false, false, null, 5, 30, 30, 20, "");
  const tT2Md = new Media(tT2, false, false, null, 5, 50, 30, 20, "");
  const tT3Md = new Media(tT3, false, true, null, 5, 70, 30, 20, "");
  const tT4Md = new Media(tT4, false, true, null, 40, 10, 30, 20, "");
  const tT5Md = new Media(tT5, false, null, null, 40, 30, 30, 20, "");
  const tT6Md = new Media(tT6, false, null, null, 40, 50, 30, 20, "");
  const tTBoard = new BoardWithMedias([tT0Md, tT1Md, tT2Md, tT3Md, tT4Md, tT5Md, tT6Md]);

  dEList = [computer, shelf, corkBoard, leftArrow, rightArrow, mc0, mc1, mc2, mc3, mc4, mc5, mc6, gWT0, gWT1, gWT2, gWT3, tT0, tT1, tT2, tT3, tT4, tT5, tT6];
  for (let i = 0; i < dEList.length; ++i) { detectElement(dEList[i]); }

  cOEList = [computer, shelf, corkBoard, leftArrow, rightArrow, playButton, resumeButton, closeCross];
  for (let i = 0; i < cOEList.length; ++i) { clickOnElement(cOEList[i]); }

  corkBoard.addEventListener("click", function() {
    if (notesList[Object.keys(notesList)[0]][1] == "acting") {
      mcBoard.showAll();
    }
    else if (notesList[Object.keys(notesList)[1]][1] == "acting") {
      gWTBoard.showAll();
    }
    else if (notesList[Object.keys(notesList)[2]][1] == "acting") {
      tTBoard.showAll();
    }
  });

  closeCross.addEventListener("click", function() {
    const mcList = [mc0, mc1, mc2, mc3, mc4, mc5, mc6];
    const gWTList = [gWT0, gWT1, gWT2, gWT3];
    const tTList = [tT0, tT1, tT2, tT3, tT4, tT5, tT6];
    for (let i = 0; i < mcList.length; ++i) {
      imageParams(mcList[i], 0, 0, 0, 0);
    }
    for (let i = 0; i < gWTList.length; ++i) {
      imageParams(gWTList[i], 0, 0, 0, 0);
    }
    for (let i = 0; i < tTList.length; ++i) {
      imageParams(tTList[i], 0, 0, 0, 0);
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
