<html>
  <head>
    <title>Serious game infox</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div id="main-container">
      <?php
        function createImageDiv(string $id, string $path) {
          echo "<img id=".$id." src=".$path."></div>";
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
        $pGWT = $p3 . "globalWarmingTweets/";
        $pTT = $p3 . "trumpTweets/";
        $pFW = $p3 . "fraudulentWebsites/";
        $pIv = $p3 . "interview/";
        $pCT = $p3 . "clozeTest/";
        $pSO = $p3 . "seriesOf/";
        $pC19 = $p3 . "covid19/";
        $pIL = $p3 . "imagesLinks/";
        $pAID = $p3 . "aIDetails/";

        function multipleImages(array $imagesList, string $path, string $extension, bool $extractName) {
          foreach ($imagesList as $image) {
            if ($extractName == true) {
              $image = substr($image, strrpos($image, "/") + 1, strrpos($image, ".") - strrpos($image, "/") - 1);
            }
            createImageDiv($image, $path . $image . $extension);
          }
        }

        createImageDiv("iutLogo", $p1 . "iutLogo.png");
        createTextDiv("creatorsText", "M. Thiel, R. Lerouge, V. Lestrelin, M. Ditlecadet,\nA. Essalhi et M. Brahmi présentent");
        createTextDiv("forText", "Pour le site d'information marseillais");
        createImageDiv("marsactuLogo", $p1 . "marsactuLogo.png");
        createRectDiv("titleBottomRect", "#000000", "100%", "20%");
        multipleImages(array("titleExamples0", "titleExamples1"), $p1, ".png", false);
        createRectDiv("titleUpRect", "#ed2139", "100%", "80%");
        createImageDiv("fekniouzeLogo", $p1 . "fekniouzeLogo.png");
        createTextDiv("startText", "Investiguer...");
        createTextDiv("imgsSubtitle", "Images en lien avec des thèmes portant sur la désinformation");
        multipleImages(array("whiteWall", "desk", "corkBoard", "computer", "shelf"), $p2, ".png", false);
        createRectDiv("obscurity", "#000000", "100%", "100%");
        multipleImages(array("closeCross", "computerScreen", "note", "leftArrow", "rightArrow", "playButton", "resumeButton", "doneButton"), $p2, ".png", false);
        createTextDiv("currentNoteText", "");
        foreach (array($pMc, $pGWT, $pTT, $pFW, $pIv, $pCT, $pSO, $pC19, $pIL, $pAID) as $p) {
          multipleImages(glob($p . "*"), $p, ".jpg", true);
        }
      ?>
    </div>
    <script src="elements.js"></script>
    <script src="interactions.js"></script>
    <script src="texts.js"></script>
    <script src="media.js"></script>
    <script src="main.js"></script>
  </body>
</html>
