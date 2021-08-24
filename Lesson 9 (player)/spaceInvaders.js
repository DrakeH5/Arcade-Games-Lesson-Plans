setInterval(function() {
  if(currentGame=='spaceInvaders') {

    canvas.width=canvas.width; //clear screen
    ctx.fillStyle = '#FFFFFF'; //set color

    ctx.fillRect(playerX,canvas.height-20,10,10); //create player

  }
},100)
