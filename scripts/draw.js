export class Draw {
  canvas;
  context;
  
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');  
  }

  drawLine(xStart, yStart, xEnd, yEnd) {
    this.context.moveTo(xStart, yStart);
    this.context.beginPath();
    this.context.lineTo(xEnd, yEnd);
    this.context.stroke();
  }
  
  drawRectangle(xLeft, yTop, width, height) {
    this.context.moveTo(xLeft, yTop);
    this.context.beginPath();
    this.context.rect(xLeft, yTop, width, height);
    this.context.stroke();
  }
  
  drawCircle(xCenter, yCenter, radius) {
    this.drawArch(xCenter, yCenter, radius, 0, 2);
  }

  drawArch(xCenter, yCenter, radius, from, to) {
    this.context.moveTo(xCenter + radius, yCenter);
    this.context.beginPath();
    this.context.arc(xCenter, yCenter, radius, from * Math.PI, to * Math.PI);
    this.context.stroke();
  }

}
