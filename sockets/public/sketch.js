var socket;

//Preload function for the P5 js project
function setup() {
  createCanvas(window.screen.availWidth, window.screen.availHeight);
  background(0);
  socket = io.connect('http://localhost:3000');
  socket.on('mouse',
    function(data) {
      console.log("Got: " + data.x + " " + data.y);
      fill(0,0,255);
      noStroke();
      ellipse(data.x, data.y, 20, 20);
    }
  );
}

function draw() {
}

//mouse envent listener
function mouseDragged() {
  fill(255);
  noStroke();
  ellipse(mouseX,mouseY,20,20);
  sendmouse(mouseX,mouseY);
}

function sendmouse(xpos, ypos) {
  console.log("sendmouse: " + xpos + " " + ypos);
  var data = {
    x: xpos,
    y: ypos
  };
  socket.emit('mouse',data);
}
