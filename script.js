let myCanvas = document.getElementById("myCanvas");
const HEIGHT = myCanvas.height;
const WIDTH = myCanvas.width;

let pen = myCanvas.getContext("2d");
let body = document.getElementsByTagName("body")[0];
let toggleSmile = 1;
body.onclick = function () {
  if (smileDirection == 200) {
    smileDirection--;
  } else if (smileDirection == -1) {
    smileDirection++;
  }
  toggleSmile*=-1
  
};
const FPS = 60;
let startFrameTime = Date.now();
let smileDirection = 100;
function gameLoop() {
  pen.clearRect(0, 0, WIDTH, HEIGHT);
  let currentFrametime = Date.now();
  let deltaTime = currentFrametime - startFrameTime;
  let actualFPS = 1000 / deltaTime;
  pen.textStyle = "20px Arial";
  pen.fillText("FPS: " + actualFPS.toFixed(2), 10, 30);

  //   console.log("looping");
  pen.strokeStyle = "black";
  pen.beginPath();
  pen.fillStyle = "#EDFF3D";
  pen.arc(WIDTH / 2, HEIGHT / 2, 200, Math.PI, Math.PI * 4);
  pen.closePath();
  pen.fill();
  pen.stroke();

  pen.beginPath();
  pen.fillStyle = "#000000";
  pen.arc(WIDTH / 2 - 90, HEIGHT / 2 - 50, 30, 0, Math.PI * 2);
  pen.closePath();
  pen.fill();
  pen.stroke();

  pen.beginPath();
  pen.fillStyle = "#000000";
  pen.arc(WIDTH / 2 + 90, HEIGHT / 2 - 50, 30, 0, Math.PI * 2);
  pen.closePath();
  pen.fill();
  pen.stroke();

  pen.beginPath();
  pen.moveTo(WIDTH / 2, HEIGHT / 2 - 20);
  pen.lineTo(WIDTH / 2, HEIGHT / 2 + 20);
  pen.stroke();

  pen.beginPath();
  pen.fillStyle = "#FF3333";
  pen.moveTo(WIDTH / 2 - 50, HEIGHT / 2 + 100);
  pen.bezierCurveTo(
    WIDTH / 2,
    HEIGHT / 2 + smileDirection, //
    WIDTH / 2,
    HEIGHT / 2 + smileDirection, //
    WIDTH / 2 + 50,
    HEIGHT / 2 + 100
  );
  pen.lineTo(WIDTH / 2 - 50, HEIGHT / 2 + 100);
  pen.fill();
  pen.closePath();
  pen.stroke();

  if (smileDirection >= 0 && smileDirection < 200) {
    smileDirection += 5 * toggleSmile;
  }
  startFrameTime = currentFrametime;
}
setInterval(gameLoop, 1000 / 60);
