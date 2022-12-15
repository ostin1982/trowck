jQuery(($) => {
    $(".js-telephone").mask("+7 (999) 999-99-99");
});

if($('.header .burger')) {
    $(() => {
        $('.header .burger').click((event) => {
            event.preventDefault();

            $('.header .nav').addClass('active');
            $('.header .cross').addClass('active');
            $('.header .burger').removeClass('active');
            $('body').addClass('lock');
        })

        $('.header .cross').click((event) => {
            event.preventDefault();

            $('.header .nav').removeClass('active');
            $('.header .cross').removeClass('active');
            $('.header .burger').addClass('active');
            $('body').removeClass('lock');
        })

        $('.header .link').click((event) => {
            event.preventDefault();

            $('.header .nav').removeClass('active');
            $('.header .cross').removeClass('active');
            $('.header .burger').addClass('active');
            $('body').removeClass('lock');
        })
    })
}

$('.js-scroll').click(function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top + 'px'
    }, {
        duration: 1000,
        easing: 'swing'
    });
    return false
})


$(document).ready(function() {
    const navOff = $('.header').offset().top;

    $(window).scroll(function() {
        const scrolled = $(this).scrollTop();
        
        if (scrolled > navOff) {
            $('body').addClass('fixed')
        } else if (scrolled <= navOff) {
            $('body').removeClass('fixed');
        }
    })
})


$('.js-card').click(function(event) {
    event.preventDefault();

    const name = $(this).attr('data-name');
    $('.js-input').val(name);

    const card = $(this);

    if(card.click) {
        $('.button-5').addClass('button-5-color');
    }
})



