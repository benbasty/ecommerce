$(function(){
    AOS.init({
        easing: 'ease',
        duration:1000
    });
    $('.open-menu-icon').on('click', function(){
        $('.main-nav-outer').addClass('open-menu');
    });
    $('.menu-close-icon').on('click', function(){
        $('.main-nav-outer').removeClass('open-menu');
    });
});