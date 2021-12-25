import { Draw } from "./draw.js";

window.onload = () => {
  const draw = new Draw(document.getElementById('canvas'));
  let xMax = canvas.getAttribute('width');
  let yMax = canvas.getAttribute('height');
  draw.drawLine(0, 0, xMax, yMax);
  draw.drawRectangle(xMax/4, yMax/4, 3*xMax/4, 3*yMax/4);
  draw.drawCircle(xMax/2, yMax/2, yMax/4);
}
