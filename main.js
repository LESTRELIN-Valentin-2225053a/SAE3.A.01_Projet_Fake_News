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

  function imageParams(image, x, y, w, h) { 
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
