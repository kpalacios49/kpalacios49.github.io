AOS.init();

document.body.addEventListener("click", (e)=>{
    let header = document.querySelector("header");
    console.log();
    if (!header.contains(e.target)){
        menu_activated = true;
        menu.setDirection(-1);
        menu.play();
        menu_left.classList.add("disappear")

    }
})


var touchsurface = document.getElementById('touchsurface'),
    startX,
    startY,
    dist,
    threshold = 150,
    allowedTime = 200,
    elapsedTime,
    startTime

function handleswipe(isrightswipe){
    if (isrightswipe){
        menu_activated = false;
        menu.setDirection(1);
        menu.play();
        menu_left.classList.remove("disappear")
    }
}
touchsurface.addEventListener('touchstart', function(e){
    var touchobj = e.changedTouches[0]
    dist = 0
    startX = touchobj.pageX
    startY = touchobj.pageY
    startTime = new Date().getTime()
}, false)

touchsurface.addEventListener('touchmove', function(e){
}, false)

touchsurface.addEventListener('touchend', function(e){
    var touchobj = e.changedTouches[0]
    dist = touchobj.pageX - startX
    elapsedTime = new Date().getTime() - startTime // get time elapsed
    var swiperightBol = (elapsedTime <= allowedTime && dist >= threshold && Math.abs(touchobj.pageY - startY) <= 100)
    handleswipe(swiperightBol)
}, false)

