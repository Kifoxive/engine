/* SPECIFIC SCROLL*/
ScrollOut({
    targets: 'div.about__specific'
})


/* POP-UPS*/
var a = document.getElementsByClassName('text_btn-1');
var b = document.getElementsByClassName('item-1');
var ab = document.getElementsByClassName('x-1');
a[0].onclick = function() {
    b[0].classList.add("text-popup__show");
    ab[0].classList.add("x-show");
}
a[1].onclick = function() {
    b[0].classList.remove("text-popup__show");
    ab[0].classList.remove("x-show");

}

var c = document.getElementsByClassName('text_btn-2');
var d = document.getElementsByClassName('item-2');
var cd = document.getElementsByClassName('x-2');
c[0].onclick = function() {
    d[0].classList.add("text-popup__show");
    cd[0].classList.add("x-show");
}
c[1].onclick = function() {
    d[0].classList.remove("text-popup__show");
    cd[0].classList.remove("x-show");

}

var e = document.getElementsByClassName('text_btn-3');
var f = document.getElementsByClassName('item-3');
var ef = document.getElementsByClassName('x-3');
e[0].onclick = function() {
    f[0].classList.add("text-popup__show");
    ef[0].classList.add("x-show");
}
e[1].onclick = function() {
    f[0].classList.remove("text-popup__show");
    ef[0].classList.remove("x-show");
}


/* MAP */

var h = document.getElementsByClassName('map-btn');
var i = document.getElementsByClassName('adress_map-mobile');
var hi = document.getElementsByClassName('adress_text');
h[0].onclick = function() {
    i[0].classList.add("map-show");
    hi[0].classList.add("text-closed");
}
h[1].onclick = function() {
    i[0].classList.remove("map-show");
    hi[0].classList.remove("text-closed");
}