var enemiesX = [
  10,
  30,
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

    ctx.fillRect(projectileX,projectileY,2.5,7); //create projectile
    projectileY-=15;

    if(enemiesX[0]<0||enemiesX[enemiesX.length-1]>canvas.width){
      enemyDirection*=-1;
      i=0;
      while(i<enemiesX.length) {
        enemiesY[i]+=10;
        if(enemiesY[i]+12>canvas.height){
          alert("you lose");
          enemiesX = [
            10,
            30,
          ]
          enemiesY = [
            10,
            10,
          ]
        }
        i++;
      }
    }
    i=0;
    while(i<enemiesX.length) {
      ctx.fillRect(enemiesX[i],enemiesY[i],12,12); //draw enemy
      if(projectileX+2.5>enemiesX[i]&&projectileX<enemiesX[i]+5&&projectileY+7>enemiesY[i]&&projectileY<enemiesY[i]+5) {
        enemiesX.splice(i,1);
        enemiesY.splice(i,1);
        projectileY=-100;
      }
      enemiesX[i]+=enemyDirection*5;
      i++;
    }

  }
},100)

projectileX = -100;
projectileY = -100;
document.addEventListener('mousedown', function(evt){
  var rect = canvas.getBoundingClientRect(),
    scaleX = canvas.width / rect.width,
    scaleY = canvas.height / rect.height;
  if(projectileY<0) {
    projectileX = playerX+5;
    projectileY = canvas.height-15;
  }
})
