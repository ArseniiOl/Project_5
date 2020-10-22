$(document).ready(function () {

    $('.toggle').click(function (event) {

        event.preventDefault();

        $('.about_content__box').hide();

       var href =  $(this).attr('href');

       $(href).fadeIn();

    });

    var windowHeight = $(window).height();


    //Поява і зникання кнопки
    $(window).scroll(function () {

        if ( $(this).scrollTop() > windowHeight) {
            $('#scrollToTop').fadeIn();
        } else {
            $('#scrollToTop').fadeOut();
        }

    });

    //Прокручуємо наверх при натиску на кнопку
    $('#scrollToTop').click(function (event) {

        event.preventDefault();

        $('html').animate({scrollTop: 0}, 800);

    });

});