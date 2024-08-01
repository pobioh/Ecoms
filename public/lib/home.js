(function ($) {
  "use strict";

  console.log("Nivo Slider plugin loaded");

  //---------------------------------------------
  //Nivo slider
  //---------------------------------------------
  $("#ensign-nivoslider").nivoSlider({
    effect: "random",
    slices: 15,
    boxCols: 8,
    boxRows: 4,
    animSpeed: 700,
    pauseTime: 9000,
    startSlide: 0,
    directionNav: true,
    controlNavThumbs: false,
    pauseOnHover: false,
    controlNav: true,
    prevText: "<",
    nextText: ">",
  });
})(jQuery);
