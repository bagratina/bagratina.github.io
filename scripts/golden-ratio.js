import { Draw } from "./draw.js";

const PHI = (1 + Math.sqrt(5)) / 2;

window.onload = () => {
  const draw = new Draw(document.getElementById('canvas'));
  let xStart = 1;
  let yStart = 1;
  let width, height, curX, curY;
  let radius = canvas.getAttribute('height') - 2;
  for (let i = 0; i < 10; i++) {
    width = signW(i) * radius;
    height = signH(i) * radius;
    draw.drawRectangle(xStart, yStart, width, height);
    curX = xStart + signRX(i) * radius;
    curY = yStart + signRY(i) * radius;
    draw.drawArch(curX, curY, radius, 1/2 - i/2, 1 - i/2);
    xStart += width;
    yStart += height;
    radius /=  PHI;
  }
}

function signW(i) {
  return Math.sin((2 * i + 1) * Math.PI / 4) > 0 ? 1 : -1;
}

function signH(i) {
  return Math.cos((2 * i + 1) * Math.PI / 4) > 0 ? 1 : -1;
}

function signRX(i) {
  return Math.cos(i * Math.PI / 2);
}

function signRY(i) {
  return Math.sin(- i * Math.PI / 2);
}
