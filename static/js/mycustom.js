document.addEventListener("DOMContentLoaded", function(event) {

var timerImgBroken = 0;
var myVarTimerImgBroken = setInterval(myTimerImgBroken, 3000);
function myTimerImgBroken() {
    var images = document.querySelectorAll('img');
    for (var i = 0; i < images.length; i++) {
        if ( !images[i].complete
        ||   typeof images[i].naturalWidth == "undefined"
        ||   images[i].naturalWidth == 0                  ) {
          images[i].src = 'https://radiobsmi.press.my.id/img/live.gif';
          //images[i].style.display='none';
        }
    }
   if (timerImgBroken === 5) {clearInterval(myVarTimerImgBroken);}
}

});