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