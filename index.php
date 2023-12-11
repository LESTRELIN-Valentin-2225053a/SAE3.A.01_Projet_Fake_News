<html>
  <head>
    <title>Serious game infox</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <script src="main.js"></script>
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
      ?>
    </div>
  </body>
</html>
