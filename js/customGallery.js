$(document).ready(function() {
    var lastScrollTop = 0;
    var navbar = $('#mainNavbar');

    // Scroll functionality for hiding/showing the navbar
    $(window).scroll(function(event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            navbar.css('top', '-70px').removeClass('black-background');
        } else {
            navbar.css('top', '0px').addClass('black-background');
        }
        lastScrollTop = st <= 0 ? 0 : st;

        fadeInOnScroll('.work_CSA');
        fadeInOnScroll('.work_HomeChef');
    });

    // Initial animation for the brief description
    $('.brief_Description').addClass('animate-brief');

    // Gallery animations
    $('.gallery-title').css('animation-delay', '0s');
    $('.gallery-section .row').each(function() {
        var imagesInRow = $(this).find('.img-fluid');
        imagesInRow.each(function(index) {
            var delay = (index * 0.3) + 's';
            $(this).css('animation-delay', delay);
        });
    });

    // Navbar toggle functionality
    $('.navbar-toggler').click(function() {
        $('.veggie-menu').toggleClass('open');
        var navbarNav = $('#navbarNav');
        if (navbarNav.is(':hidden')) {
            navbarNav.slideDown(300);
            $('body').addClass('stop-scrolling');
        } else {
            navbarNav.slideUp(300);
            $('body').removeClass('stop-scrolling');
        }
    });

    // Click event on nav-link to enable scrolling back
    $('.navbar-nav .nav-link').click(function() {
        $('#navbarNav').slideUp(300);
        $('.veggie-menu').removeClass('open');
        $('body').removeClass('stop-scrolling');
    });
});
