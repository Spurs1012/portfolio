$(document).ready(function() {
    // Functions to enable/disable scrolling
    function disableScroll() {
        $('body').addClass('stop-scrolling');
    }

    function enableScroll() {
        $('body').removeClass('stop-scrolling');
    }

    var lastScrollTop = 0;
    var navbar = $('#mainNavbar');

    // Navbar hide and show on scroll
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
    });

    // Navbar toggle functionality
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

    // Close navbar on nav item click
    $('.navbar-nav .nav-link').click(function() {
        $('#navbarNav').slideUp(300);
        $('.veggie-menu').removeClass('open');
        enableScroll();
    });

    // Immediate fade-in on load for "Who I Am" section
    var immediateTargets = document.querySelectorAll('.who-i-am-section .hidden');
    immediateTargets.forEach(function(target) {
        target.classList.remove('hidden');
        target.classList.add('fadeInUp');
    });
    
    // Observer for skill set image fade-in when scrolled into view
    var skillSetObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('hidden');
                entry.target.classList.add('fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    var skillSetTarget = document.querySelector('.skill-set-section .hidden');
    skillSetObserver.observe(skillSetTarget);

    // Staggered fade-in for passions
    let count = 0;
    var staggeredObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.remove('hidden');
                    entry.target.classList.add('fadeInUp');
                    observer.unobserve(entry.target);
                }, count * 200);
                count++;
            }
        });
    }, { threshold: 0.05 });

    var staggeredTargets = document.querySelectorAll('.passion-section .hidden');
    staggeredTargets.forEach(target => {
        staggeredObserver.observe(target);
    });
});
