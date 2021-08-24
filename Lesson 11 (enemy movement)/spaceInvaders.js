var enemiesX = [
  10,
  20,
]
var enemiesY = [
  10,
  10,
]
enemyDirection=1;
setInterval(function() {
  if(currentGame=='spaceInvaders') {

    canvas.width=canvas.width; //clear screen
    ctx.fillStyle = '#FFFFFF'; //set color

    ctx.fillRect(playerX,canvas.height-20,10,10); //create player

    if(enemiesX[0]<0||enemiesX[enemiesX.length-1]>canvas.width){
      enemyDirection*=-1;
      i=0;
      while(i<enemiesX.length) {
        enemiesY[i]+=10;
        i++;
      }
    }
    i=0;
    while(i<enemiesX.length) {
      ctx.fillRect(enemiesX[i],enemiesY[i],5,5); //draw enemy
      enemiesX[i]+=enemyDirection*5;
      i++;
    }

  }
},100)
