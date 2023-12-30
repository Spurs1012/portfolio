$(document).ready(function() {
    var lastScrollTop = 0;
    var navbar = $('#mainNavbar');
    var scrollContainer = $('.scroll-down-container');

    $(window).scroll(function() {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            navbar.css('top', '-70px');
            scrollContainer.css('opacity', 1 - st / 100);
        } else {
            navbar.css('top', '0px');
            scrollContainer.css('opacity', 1);
        }
        if (st <= 0) {
            navbar.removeClass('black-background').css('background-color', 'transparent');
        } else {
            navbar.addClass('black-background').css('background-color', 'black');
        }
        lastScrollTop = st <= 0 ? 0 : st;

        // New Video Autoplay Logic
        var videos = $('video');

        // Intersection Observer to handle video play/pause on scroll
        if ('IntersectionObserver' in window) {
            var videoObserver = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.play();
                    } else {
                        entry.target.pause();
                    }
                });
            }, { threshold: 0.5 });

            videos.each(function() {
                videoObserver.observe(this);
            });
        }
    });

    function checkCarouselSlide(carouselId) {
        var myCarousel = $(carouselId);
        var totalItems = myCarousel.find('.carousel-item').length;
        var currentIndex = myCarousel.find('.carousel-item.active').index() + 1;

        if (currentIndex === 1) {
            myCarousel.find('.carousel-control-prev').hide();
        } else {
            myCarousel.find('.carousel-control-prev').show();
        }

        if (currentIndex === totalItems) {
            myCarousel.find('.carousel-control-next').hide();
        } else {
            myCarousel.find('.carousel-control-next').show();
        }
    }

    checkCarouselSlide('#wireframeCarousel-sketch');
    $('#wireframeCarousel-sketch').on('slid.bs.carousel', function() {
        checkCarouselSlide('#wireframeCarousel-sketch');
    });

    checkCarouselSlide('#secondWireframeCarousel');
    $('#secondWireframeCarousel').on('slid.bs.carousel', function() {
        checkCarouselSlide('#secondWireframeCarousel');
    });

    $('.navbar-toggler').click(function() {
        $('.veggie-menu').toggleClass('open');
        var navbarNav = $('#navbarNav');
        if (navbarNav.is(':hidden')) {
            navbarNav.slideDown(300);
            disableScroll();
        } else {
            navbarNav.slideUp(300);
            enableScroll();
        }
    });

    $('.navbar-nav .nav-link').click(function() {
        $('#navbarNav').slideUp(300);
        $('.veggie-menu').removeClass('open');
        enableScroll();
    });

    function disableScroll() {
        $('body').addClass('stop-scrolling');
    }

    function enableScroll() {
        $('body').removeClass('stop-scrolling');
    }
});
