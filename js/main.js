'use strict'
$(document).ready(function () {
    navAddClass();
});

$(window).scroll(function () {
    navAddClass();
});

function navAddClass() {
    var navHeight = $('#main-nav').height();
    console.log(navHeight);

    var windowScrollPosition = $(window).scrollTop();
    consol.log(windowScrollPosition);
    if (windowScrollPosition >= navHeight) {
        $('#main-nav').addClass('scrolled');
    } else {
        $('navHeight').removeClass('scrolled');
    }
}
