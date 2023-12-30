$(document).ready(function() {
    // Existing code for disabling and enabling scroll
    function disableScroll() {
        $('body').addClass('stop-scrolling');
    }

    function enableScroll() {
        $('body').removeClass('stop-scrolling');
    }

    // Existing code for handling navbar behavior on scroll
    var lastScrollTop = 0;
    var navbar = $('#mainNavbar');

    $(window).scroll(function() {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            navbar.css('top', '-70px').removeClass('black-background');
        } else {
            navbar.css('top', '0px').addClass('black-background');
        }
        lastScrollTop = st <= 0 ? 0 : st;

        fadeInOnScroll('.work_CSA');
        fadeInOnScroll('.work_HomeChef');
        fadeInOnScroll('.work_PureRoaming');
    });

    // Function to toggle navbar on click
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

    // Function to close navbar when a link is clicked
    $('.navbar-nav .nav-link').click(function() {
        $('#navbarNav').slideUp(300);
        $('.veggie-menu').removeClass('open');
        enableScroll();
    });

    // Function to apply fade-in animation on scroll
    function fadeInOnScroll(selector) {
        var elem = $(selector);
        if (isElementInViewport(elem) && !elem.hasClass('animated')) {
            elem.addClass('fadeInUp animated');
        }
    }

    // Function to check if an element is in the viewport
    function isElementInViewport(el) {
        var rect = el[0].getBoundingClientRect();
        return (
            rect.top <= $(window).height() * 0.8 && 
            rect.bottom >= 0
        );
    }

    // Apply fade-in animation on page load for specific sections
    applyFadeInOnLoad('.work_HomeChef');
    applyFadeInOnLoad('.work_CSA');
    applyFadeInOnLoad('.work_PureRoaming');

    // Function to apply fade-in animation on page load
    function applyFadeInOnLoad(selector) {
        var elem = $(selector);
        if (isElementInViewport(elem)) {
            elem.addClass('fadeInUp animated');
        }
    }
});
