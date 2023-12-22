<html>
  <head>
    <title>Serious game infox</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div id="main-container">
      <?php
        function createImageDiv(string $divId, string $path) {
          echo "<img id=".$divId." src=".$path."></div>";
        }

        function createTextDiv(string $divId, string $text) {
          echo "<div id=".$divId.">".$text."</div>";
        }

        function createRectDiv(string $divId, string $rgb, string $width, string $height) {
          echo "<div id=".$divId." style='background-color: ".$rgb."; position: absolute; width: ".$width."; height: ".$height.";'></div>";
        }

        createImageDiv("iutLogo", "images/intro/iutLogo.png");
        createTextDiv("creatorsText", "M. Thiel, R. Lerouge, V. Lestrelin, M. Ditlecadet,\nA. Essalhi et M. Brahmi présentent");
        createTextDiv("forText", "Pour le site d'information marseillais");
        createImageDiv("marsactuLogo", "images/intro/marsactuLogo.png");
        createRectDiv("titleBottomRect", "#000000", "100%", "20%");
        createImageDiv("titleExamples0", "images/intro/titleExamples0.png");
        createImageDiv("titleExamples1", "images/intro/titleExamples1.png");
        createRectDiv("titleUpRect", "#ed2139", "100%", "80%");
        createImageDiv("fekniouzeLogo", "images/intro/fekniouzeLogo.png");
        createTextDiv("startText", "Investiguer...");
        createTextDiv("imgsSubtitle", "Images en lien avec des thèmes portant sur la désinformation");
        createImageDiv("whiteWall", "images/room/whiteWall.png");
        createImageDiv("desk", "images/room/desk.png");
        createImageDiv("corkBoard", "images/room/corkBoard.png");
        createImageDiv("computer", "images/room/computer.png");
        createImageDiv("shelf", "images/room/shelf.png");
        createRectDiv("obscurity", "#000000", "100%", "100%");
        createImageDiv("closeCross", "images/room/closeCross.png");
        createImageDiv("computerScreen", "images/room/computerScreen.png");
        createImageDiv("note", "images/room/note.png");
        createImageDiv("leftArrow", "images/room/leftArrow.png");
        createImageDiv("rightArrow", "images/room/rightArrow.png");
        createImageDiv("playButton", "images/room/playButton.png");
        createImageDiv("resumeButton", "images/room/resumeButton.png");
        createImageDiv("doneButton", "images/room/doneButton.png");
        createTextDiv("currentNoteText", "");

        createImageDiv("mcThumbnail", "notes/macron/mcThumbnail.jpg");
        createImageDiv("tTThumbnail", "notes/trumpTweets/tTThumbnail.jpg");
        createImageDiv("fWThumbnail", "notes/fraudulentWebsites/fWThumbnail.png");
        createImageDiv("ivThumbnail", "notes/interview/ivThumbnail.jpg");
        createImageDiv("cTThumbnail", "notes/clozeTest/cTThumbnail.jpg");
        createImageDiv("sOThumbnail", "notes/seriesOf/sOThumbnail.jpg");
        createImageDiv("c19Thumbnail", "notes/covid19/c19Thumbnail.jpg");
      
        createImageDiv("macron0", "notes/macron/macron0.jpg");
        createImageDiv("macron1", "notes/macron/macron1.jpg");
        createImageDiv("macron2", "notes/macron/macron2.jpg");
        createImageDiv("macron3", "notes/macron/macron3.jpg");
      ?>
    </div>
    <script src="elements.js"></script>
    <script src="interactions.js"></script>
    <script src="main.js"></script>
  </body>
</html>
