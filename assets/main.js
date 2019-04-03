var canvas = document.getElementById('canvas');
cx = canvas.getContext('2d');

container = document.getElementById('container');

win_offset = 10;
canvas.width = window.innerWidth - 3 * win_offset;
canvas.height = window.innerHeight - 5 * win_offset;

cnvs_offset = 2;
xmin = canvas.offsetLeft + cnvs_offset;
ymin = canvas.offsetTop + cnvs_offset;

ymax = (canvas.offsetTop + canvas.offsetHeight) - cnvs_offset;
xmax = (canvas.offsetLeft + canvas.offsetWidth) - cnvs_offset;

var game = {
  bgcolor: "#282c34",
  speed: 10
}


var player = {
  color: '#f13a62',
  size: 15,
  x: 50,
  y: 50,
  dx: 5,
  dy: 0,
  spdx: 5,
  spdy: 5,
  move: function() {
    // clear older instance

    cx.fillStyle = game.bgcolor;
    cx.fillRect(this.x, this.y, this.size,this.size);

    //add new pos
    cx.fillStyle = this.color;
    this.x += this.dx;
    this.y += this.dy;
    if (this.x > xmax) this.x = xmin;
    if (this.x < xmin) this.x = xmax;
    if (this.y > ymax) this.y = ymin;
    if (this.y < ymin) this.y = ymax;

    cx.fillRect(this.x, this.y, this.size, this.size);
  }
}

cx.fillStyle = "red";
cx.fillRect(canvas.width, 200, 70, 70);

function move() {
  player.move();
}

window.addEventListener("keyup", keyPressed, false);


setInterval(move, game.speed);
function keyPressed(e) {

  _dx = 0;
  _dy = 0;
  switch (e.keyCode) {
    case 37:
      console.log("Left");
      _dx = -1;
      _dy = 0;
      break;
    case 38:
      console.log("UP");
      _dx = 0;
      _dy = -1;
      break;
    case 39:
      console.log("Right");
      _dx = 1;
      _dy = 0;
      break;
    case 40:
      console.log("Down");
      _dx = 0;
      _dy = 1;
      break;
    default:

  }

  player.dx = player.spdx * _dx;
  player.dy = player.spdy * _dy;

}
