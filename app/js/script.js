// Header Menu
$(document).ready(function() {

    $(".header__hamburger").on('click', function() {
        $('.header__wrapper').toggleClass('openmenu');
    })
}) 

// Sticky Header

$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $("header").addClass("stickyHeader");
        }
        else{
        $("header").removeClass("stickyHeader");
        }
})
