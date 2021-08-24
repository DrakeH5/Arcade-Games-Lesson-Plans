playerX = 0;
playerY = 0;

document.addEventListener('mousemove', function(evt){
  var rect = canvas.getBoundingClientRect(),
    scaleX = canvas.width / rect.width,
    scaleY = canvas.height / rect.height;
  mouseX = (evt.clientX - rect.left) * scaleX;
  mouseY = (evt.clientY - rect.top) * scaleY;
})
setInterval(function(){
  if(mouseX>playerX){playerX++;} else{playerX--;}
  if(mouseY>playerY){playerY++;} else{playerY--;}
},10)
