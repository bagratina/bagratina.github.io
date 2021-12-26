import { Draw } from "./draw.js";

const phi = (1 + Math.sqrt(5)) / 2;

window.onload = () => {
  const draw = new Draw(document.getElementById('canvas'));
  let xMax = canvas.getAttribute('height') - 10;
  let yMax = xMax;
  let xMin = 10;
  let yMin = 10;
  for (let i = 1; i < 10; i++) {
    let radius = Math.abs(xMax - xMin);
    draw.drawRectangle(xMin, yMin, xMax, yMax);
    xMin = xMax;
    yMin = yMax;
    xMax = xMax + signX(i) * radius / phi;
    yMax = yMax + signY(i) * radius / phi;
  }
}

function signX(i) {
  return (Math.sin((2 * i + 1) * Math.PI / 4) > 0) ? 1 : -1;
}

function signY(i) {
  return (Math.cos((2 * i + 1) * Math.PI / 4) > 0) ? 1 : -1;
}
