AOS.init();

const principal_section = document.querySelector('.principal-inverted')
const hamburguer = document.getElementById("hamburguer")
const scrollDown_button = document.getElementById("scrollDown")
const name_text = document.querySelector(".name-text")

window.onload = function () {
    name_text.classList.add("name-text-show")
    setTimeout(() => {
        principal_section.classList.add("hide-inverted")
        hamburguer.classList.add("animate__animated", "animate__fadeInLeft")
        scrollDown_button.classList.add("animate__animated", "animate__fadeInUp")

        //Typing carousel

        var elements = document.getElementsByClassName('txt-rotate');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-rotate');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtRotate(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
        document.body.appendChild(css);

    }, 1200
    )


};

document.body.addEventListener("click", (e) => {
    let header = document.querySelector("header");
    console.log();
    if (!header.contains(e.target)) {
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

function handleswipe(isrightswipe) {
    if (isrightswipe) {
        menu_activated = false;
        menu.setDirection(1);
        menu.play();
        menu_left.classList.remove("disappear")
    }
}
touchsurface.addEventListener('touchstart', function (e) {
    var touchobj = e.changedTouches[0]
    dist = 0
    startX = touchobj.pageX
    startY = touchobj.pageY
    startTime = new Date().getTime()
}, false)

touchsurface.addEventListener('touchmove', function (e) {
}, false)

touchsurface.addEventListener('touchend', function (e) {
    var touchobj = e.changedTouches[0]
    dist = touchobj.pageX - startX
    elapsedTime = new Date().getTime() - startTime // get time elapsed
    var swiperightBol = (elapsedTime <= allowedTime && dist >= threshold && Math.abs(touchobj.pageY - startY) <= 100)
    handleswipe(swiperightBol)
}, false)





//Typing carousel



var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};
