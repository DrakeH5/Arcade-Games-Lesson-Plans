setInterval(function() {
  if(currentGame=='pong') {

    canvas.width=canvas.width; //clear screen
    ctx.fillStyle = '#FFFFFF'; //set color or paddles and balls

    ctx.fillRect(10,playerY,5,canvas.height/4); //create player;s paddle

    ctx.fillRect(canvas.width-15,enemyY,5,canvas.height/4);

    ctx.beginPath();
    ctx.arc(ballX, ballY, 10, 0, 2 * Math.PI); //draws ball
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.stroke();

  }
},100);
