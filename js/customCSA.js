$(document).ready(function() {
    var lastScrollTop = 0;
    var navbar = $('#mainNavbar');
    var scrollContainer = $('.scroll-down-container');

    $(window).scroll(function() {
        var st = $(this).scrollTop();

        // Navbar hide/show on scroll
        if (st > lastScrollTop) {
            navbar.css('top', '-70px');
            scrollContainer.css('opacity', 1 - st / 100);
        } else {
            navbar.css('top', '0px');
            scrollContainer.css('opacity', 1);
        }

        // Navbar color change at top of page
        if (st <= 0) {
            navbar.removeClass('black-background').css('background-color', 'transparent');
        } else {
            navbar.addClass('black-background').css('background-color', 'black');
        }

        lastScrollTop = st <= 0 ? 0 : st;
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
