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

        $p0 = "images/"; //p -> path
        $p1 = $p0 . "intro/";
        $p2 = $p0 . "room/";
        $p3 = $p0 . "notes/";
        $pMc = $p3 . "macron/";
        $pTT = $p3 . "trumpTweets/";
        $pFW = $p3 . "fraudulentWebsites/";
        $pIv = $p3 . "interview/";
        $pCT = $p3 . "clozeTest/";
        $pSO = $p3 . "seriesOf/";
        $pC19 = $p3 . "covid19/";
  
        createImageDiv("iutLogo", $p1 . "iutLogo.png");
        createTextDiv("creatorsText", "M. Thiel, R. Lerouge, V. Lestrelin, M. Ditlecadet,\nA. Essalhi et M. Brahmi présentent");
        createTextDiv("forText", "Pour le site d'information marseillais");
        createImageDiv("marsactuLogo", $p1 . "marsactuLogo.png");
        createRectDiv("titleBottomRect", "#000000", "100%", "20%");
        createImageDiv("titleExamples0", $p1 . "titleExamples0.png");
        createImageDiv("titleExamples1", $p1 . "titleExamples1.png");
        createRectDiv("titleUpRect", "#ed2139", "100%", "80%");
        createImageDiv("fekniouzeLogo", $p1 . "fekniouzeLogo.png");
        createTextDiv("startText", "Investiguer...");
        createTextDiv("imgsSubtitle", "Images en lien avec des thèmes portant sur la désinformation");
        createImageDiv("whiteWall", $p2 . "whiteWall.png");
        createImageDiv("desk", $p2 . "desk.png");
        createImageDiv("corkBoard", $p2 . "corkBoard.png");
        createImageDiv("computer", $p2 . "computer.png");
        createImageDiv("shelf", $p2 . "shelf.png");
        createRectDiv("obscurity", "#000000", "100%", "100%");
        createImageDiv("closeCross", $p2 . "closeCross.png");
        createImageDiv("computerScreen", $p2 . "computerScreen.png");
        createImageDiv("note", $p2 . "note.png");
        createImageDiv("leftArrow", $p2 . "leftArrow.png");
        createImageDiv("rightArrow", $p2 . "rightArrow.png");
        createImageDiv("playButton", $p2 . "playButton.png");
        createImageDiv("resumeButton", $p2 . "resumeButton.png");
        createImageDiv("doneButton", $p2 . "doneButton.png");
        createTextDiv("currentNoteText", "");

        createImageDiv("mcThumbnail", $pMc . "mcThumbnail.jpg");
        createImageDiv("tTThumbnail", $pTT . "tTThumbnail.jpg");
        createImageDiv("fWThumbnail", $pFW . "fWThumbnail.png");
        createImageDiv("ivThumbnail", $pIv . "ivThumbnail.jpg");
        createImageDiv("cTThumbnail", $pCT . "cTThumbnail.jpg");
        createImageDiv("sOThumbnail", $pSO . "sOThumbnail.jpg");
        createImageDiv("c19Thumbnail", $pC19 . "c19Thumbnail.jpg");

        for ($i = 0; $i < 7; ++$i) {
          createImageDiv("mc" . $i, $pMc . "mc" . $i . ".jpg");
        }
        for ($i = 0; $i < 1; ++$i) {
          createImageDiv("tT" . $i, $pTT . "tT" . $i . ".jpg");
        }
        
      ?>
    </div>
    <script src="elements.js"></script>
    <script src="interactions.js"></script>
    <script src="media.js"></script>
    <script src="main.js"></script>
  </body>
</html>
