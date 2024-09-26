(function() {
    'use strict';
    jQuery(document).ready(function() {

        $.browserDetection(true);

        $('.active-slider').owlCarousel({
            nav: true,
            navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
            dot: true,
            items: 1,
            animateOut: 'fadeOut',
            loop: true,
            margin: 10,
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 1,
                },
                768: {
                    items: 1,
                }
            }

        });


    });
})();



jQuery(function($) {
    "use strict";
    $.browserDetection(true);

    $('.active-slider').owlCarousel({
        nav: true,
        navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
        dot: true,
        items: 1,
        animateOut: 'fadeOut',
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 1,
            },
            768: {
                items: 1,
            }
        }

    });

    $('.main-menu nav, nav.main-menu').meanmenu({
        meanMenuContainer: '.mobile-thum',
        meanScreenWidth: '1199',
        meanRevealPosition: 'right'
    });


});