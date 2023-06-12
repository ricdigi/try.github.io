const pixelArt = document.getElementById("pixel_art");

if (!navigator.userAgent.match(/Mobi/i)) {
  pixelArt.addEventListener("mouseover", function() {
    pixelArt.classList.add("zoom-out");
  });

  pixelArt.addEventListener("mouseout", function() {
      pixelArt.classList.remove("zoom-out");
  });
}