const box = document.getElementById("box");
const mm = 10; //movement
let x = 0;
let y = 0;

window.addEventListener("keydown", function (event) {
  if (event.key.startsWith("Arrow")) {
    switch (event.key) {
      case "ArrowUp":
        y -= mm;
        break;
      case "ArrowDown":
        y += mm;
        break;
      case "ArrowLeft":
        x -= mm;
        break;
      case "ArrowRight":
        x += mm;
        break;
    }
    box.style.top = `${y}px`;
    box.style.left = `${x}px`;
  }
});
