//  jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    let backToTopOffset = 200;
    let backToTop = $('.reset-scroll');

    if ($('.navbar').offset().top > 50) {
        $('.navbar-fixed-top').addClass('top-nav-collapse');
    } else {
        $('.navbar-fixed-top').removeClass('top-nav-collapse');
    }

    if ($(this).scrollTop() > backToTopOffset) {
        backToTop.addClass('show');
    } else {
        backToTop.removeClass('show');
    }
});

//  jQuery for page scrolling feature - requires jQuery Easing plugin
function initSmoothScroll() {
    $('a.page-scroll').on('click', function(event) {
        let $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top,
        }, 700, 'easeInOutExpo');
        event.preventDefault();
    });
};
