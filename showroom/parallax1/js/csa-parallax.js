$(document).ready(function ($) {

    //variables
    var links = $('.navigation').find('li');
    slide = $('.slide');
    button = $('.button');
    buttonBack = $('.buttonBack');
    mywindow = $(window);
    htmlbody = $('html,body');

    // logo oopacity on mouseover/hover
    $('img.logo').hover(function(){
        $(this).stop().animate({"opacity": 1});
    },function(){
        $(this).stop().animate({"opacity": 0.4});
    });

    // start stellarjs
    $(window).stellar();

   // easing function to data-slide no
    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 2000, 'easeInOutQuint');
    }

    // link list easing effect
    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    // next button easing effect
    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);

    });

    // back to top easing effect
    buttonBack.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll('0');
    });

});