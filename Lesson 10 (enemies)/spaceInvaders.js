var enemiesX = [
  10,
  20,
]
var enemiesY = [
  10,
  10,
]
setInterval(function() {
  if(currentGame=='spaceInvaders') {

    canvas.width=canvas.width; //clear screen
    ctx.fillStyle = '#FFFFFF'; //set color

    ctx.fillRect(playerX,canvas.height-20,10,10); //create player

    i=0;
    while(i<enemiesX.length) {
      ctx.fillRect(enemiesX[i],enemiesY[i],5,5); //draw enemy
      i++;
    }

  }
},100)
