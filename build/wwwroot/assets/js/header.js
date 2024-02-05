// show and hide header
let prevScrollPos = window.scrollY || document.documentElement.scrollTop;
window.onscroll = function () {
    const currentScrollPos = window.scrollY || document.documentElement.scrollTop;
    const header = document.getElementsByClassName("nav_header")[0];
    if (prevScrollPos > currentScrollPos) {
        header.style.top = "0";
    } else {
        header.style.top = "-85px";
    }
    prevScrollPos = currentScrollPos;
};