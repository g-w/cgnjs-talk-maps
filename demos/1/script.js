
/*global $ */

window.onload = function () {
  var canvas = document.getElementById("color-map");
  var context = canvas.getContext("2d");

  var rgb = new Image();
  rgb.onload = function() {
    context.drawImage(rgb, 0, 0);
  };
  rgb.src = "rgb.png";

  var map = document.getElementById("map");
  map.onmousemove = function(e) {
    var x = e.pageX;
    var y = e.pageY;

    var data = context.getImageData(x, y, 1, 1).data;
    if (data && data[0] && data[0] > 200) {
      map.className = "highlight";
    } else {
      map.className = "";
    }
  };
};