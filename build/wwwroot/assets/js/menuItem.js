let prevScrollPos1 = window.scrollY || document.documentElement.scrollTop;
// show and hide header
window.onscroll = function () {
    const currentScrollPos1 = window.scrollY || document.documentElement.scrollTop;
    const menu = document.getElementById('fix_menu');
    if (prevScrollPos1 > currentScrollPos1) {
        menu.style.top = "80px";
    } else {
        menu.style.top = "0";
    }
    prevScrollPos1 = currentScrollPos1;
};