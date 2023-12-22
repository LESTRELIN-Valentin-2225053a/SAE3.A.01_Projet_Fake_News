var notesList = {"Macron ou non ?" : [mcThumbnail, "todo"], //todo, acting, done
                 "Trump et le réchauffement climatique" : [tTThumbnail, "todo"],
                 "Les sites frauduleux" : [fWThumbnail, "todo"],
                 "Vérification des faits d'un entretien" : [ivThumbnail, "todo"],
                 "Texte à trous" : [cTThumbnail, "todo"],
                 "Série de photos et vidéos" : [sOThumbnail, "todo"],
                 "Covid-19" : [c19Thumbnail, "todo"]
                 };
var noteIndex = 0;

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
