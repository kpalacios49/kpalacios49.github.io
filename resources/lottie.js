let menu_left = document.querySelector('#menu');

let scrollDown = bodymovin.loadAnimation({
    container: document.getElementById("scrollDown"),
    rendered: 'svg',
    loop: true,
    autoplay: true,
    path: 'resources/images/scrollDown.json'
})
scrollDown.setSpeed(1.5)
scrollDown.addEventListener("click",function (){

})

let menu = bodymovin.loadAnimation({
    container: document.getElementById("hamburguer"),
    rendered: 'svg',
    loop: false,
    autoplay: false,
    path: 'resources/images/menuV4.json'

})
let menu_activated = true;
document.getElementById("hamburguer").addEventListener('click',function(){
    if (menu_left.classList.contains("disappear")){
        menu_left.classList.remove("disappear")
    }
    else {
        menu_left.classList.add("disappear")
    }

    if (menu_activated){
        menu_activated = false;
        menu.setDirection(1); menu.play();
    }
    else{
        menu_activated = true;
        menu.setDirection(-1); menu.play();
    }
})




/*
/!* Play an animation on each click *!/
var hamburger= document.getElementById('menu');
hamburger.addEventListener('click', function(){
    hamburger = !hamburger if(hamburger) {
        console.log('Second Click');

    }
    else { console.log('First click'); menu.setDirection(1); menu.play(); }
})*/
