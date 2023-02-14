document.getElementById("bold").addEventListener("click", function () {
  bold("text-write");
});

document.getElementById("italic").addEventListener("click", function () {
  italic("text-write");
});

document.getElementById("underline").addEventListener("click", function () {
  underline("text-write");
});

document.getElementById("left").addEventListener("click", function () {
  left("text-write");
});

document.getElementById("center").addEventListener("click", function () {
  center("text-write");
});

document.getElementById("right").addEventListener("click", function () {
  right("text-write");
});

document.getElementById("justify").addEventListener("click", function () {
  justify("text-write");
});

document.getElementById("color").addEventListener("change", function (event) {
  const colorText = document.getElementById("text-write");
  colorText.style.color = event.target.value;
});
document.getElementById("font-size").addEventListener("change", function (event) {
  const fontSizeText = document.getElementById("text-write");
  fontSizeText.style.fontSize = event.target.value + "px";
});
