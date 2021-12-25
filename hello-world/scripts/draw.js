window.onload = () => {
  let canvas = document.getElementById('canvas');
  let context = canvas.getContext('2d');
  context.moveTo(50, 100);
  context.lineTo(400, 200);
  context.stroke();
}
