document.addEventListener("DOMContentLoaded", function(event) {

var timerImgBroken = 0;
var myVarTimerImgBroken = setInterval(myTimerImgBroken, 1000);
function myTimerImgBroken() {
   document.querySelectorAll('img').forEach(function(img){
  	img.onerror = function(){this.style.display='none';};
   })
   timerImgBroken++;
   console.log(timerImgBroken)
   if (timerImgBroken === 5) clearInterval(myVarTimerImgBroken);
}

});