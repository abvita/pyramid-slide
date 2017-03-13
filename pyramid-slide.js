var symbolSelect = document.getElementById("symbol-select");
var heightSlider = document.getElementById("range-slide");
var rangeNum = document.getElementById("range-num");

var brick = symbolSelect.value;
var height = 5;
rangeNum.innerHTML = height;

heightSlider.oninput = function(event) {
  event.preventDefault();
  height = heightSlider.value;
  drawPyramid(height);
  rangeNum.innerHTML = height;
}

symbolSelect.onchange = function(event) {
  event.preventDefault();
  brick = symbolSelect.value;
  rangeNum.innerHTML = height;
  drawPyramid(height);
}

function drawPyramid(height) {

    document.getElementById("pyramid").innerHTML = "";
    for (var row = 0; row < height; row++) {

        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp";
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += brick;
        }

        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
  }

drawPyramid(height);
