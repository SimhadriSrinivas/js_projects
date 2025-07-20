const hexBtn = document.querySelector(".hex-btn");
const hexcolorvalue = document.querySelector(".hex-color-value");
const hexColorContainer = document.querySelector(".hex-color-container");
const hexCopyBtn = document.querySelector(".hex-copy-color");

// Create Random HEX color
hexBtn.addEventListener("click", () => {
  let characterSet = "0123456789ABCDEF";
  let hexColorOutput = "";

  for (let i = 0, n = characterSet.length; i < 6; ++i) {
    hexColorOutput += characterSet.charAt(Math.floor(Math.random() * n));
  }
  hexcolorvalue.textContent = `#${hexColorOutput}`;
  hexColorContainer.style.backgroundColor = `#${hexColorOutput}`;
  hexBtn.style.color = `#${hexColorOutput}`;
});

// RGB Color generator
const rgbBtn = document.querySelector(".rgb-btn");
const getRedInputRange = document.getElementById("red");
const getGreenInputRange = document.getElementById("green");
const getBlueInputRange = document.getElementById("blue");
const rgbColorContainer = document.querySelector(".rgb-color-container");
const rgbCopyBtn = document.querySelector(".rgb-copy-color");
const rgbColorValue = document.querySelector(".rgb-color-value");

rgbBtn.addEventListener("click", () => {
  let extractRedValue = getRedInputRange.value;
  let extractGreenValue = getGreenInputRange.value;
  let extractBlueValue = getBlueInputRange.value;

  rgbColorValue.textContent = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`;
  rgbColorContainer.style.backgroundColor = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`;
  rgbBtn.style.color = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`;
});

function copyHexColorToClipBoard() {
  navigator.clipboard.writeText(hexcolorvalue.textContent);
  alert("Hex Color is copied to clipboard");
}

hexCopyBtn.addEventListener("click", copyHexColorToClipBoard);

function copyRgbColorToClipboard() {
  navigator.clipboard.writeText(rgbColorValue.textContent);
  alert("RGB Color is copied to clipboard");
}

rgbCopyBtn.addEventListener("click", copyRgbColorToClipboard);
