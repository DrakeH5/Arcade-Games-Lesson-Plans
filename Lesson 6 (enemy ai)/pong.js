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

    ballX+=ballVelocity[0];
    ballY+=ballVelocity[1];

    if(ballY>canvas.height) {
      ballVelocity[1]*=-1;
    }
    if(ballY<1) {
      ballVelocity[1]*=-1;
    }


    if(ballY<playerY+(canvas.height/4)&&ballY>playerY&&ballX<15) {
      ballVelocity[1]*=-1;
      ballVelocity[0]*=-1;
    }


    //enemy ai
    enemyY+=(ballY+2)-(enemyY+((canvas.width/4)/2));

    //enemy bounce it back
    if(ballY<enemyY+(canvas.height/4)&&ballY>enemyY&&ballX>canvas.width-15) {
      ballVelocity[1]*=-1;
      ballVelocity[0]*=-1;
    }


  }
},100);
