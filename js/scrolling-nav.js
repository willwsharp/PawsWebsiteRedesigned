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
        let target = $(this.getAttribute('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 700, 'easeInOutExpo');
        }
    });
};