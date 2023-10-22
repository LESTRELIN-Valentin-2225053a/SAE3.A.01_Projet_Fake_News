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

        createImageDiv("IUTLogo", "IUTLogo.png");
        createTextDiv("creatorsText", "M. Thiel, R. Lerouge, V. Lestrelin, M. Ditlecadet,\nA. Essalhi et M. Brahmi présentent");
        createTextDiv("forText", "Pour le site d'information marseillais");
        createImageDiv("MarsactuLogo", "MarsactuLogo.png");
      ?>
    </div>
  </body>
</html>
