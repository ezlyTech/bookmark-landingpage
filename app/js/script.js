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

// Feature Tabs

$(document).ready(functin(){
    $(tabSelection).click(function(){
        $(this).addClass("selected1").siblings().removeClass("selected1");
        $(".tabSelectionContent > p").hide();
        $($(this).data("value")).fadeIn();
    }),
});