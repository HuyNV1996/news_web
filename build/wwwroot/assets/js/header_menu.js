// show and hide header
let prevScrollPos = window.scrollY || document.documentElement.scrollTop;
window.onscroll = function () {
    const currentScrollPos = window.scrollY || document.documentElement.scrollTop;
    const header = document.getElementsByClassName("nav_header")[0];
    const menu = document.getElementById('fix_menu');
    if (prevScrollPos > currentScrollPos) {
        header.style.top = "0";
        menu.style.top = "70px";
    } else {
        header.style.top = "-85px";
        menu.style.top = "0px";
    }
    prevScrollPos = currentScrollPos;
};