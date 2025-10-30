(function($) {
    "use strict";

    /*------------------------------------
        Sticky Menu
    -------------------------------------- */
    var StickyHeader = $('#sticky-header');
    var win = $(window);
    
    win.scroll(function() {
        if ($(this).scrollTop() > 1) {
            StickyHeader.addClass("sticky");
        } else {
            StickyHeader.removeClass("sticky");
        }
    });
    
    
    /*------------------------------------
        slider-active
    ------------------------------------- */
    $('.slider-active').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        nav: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplay: false,
        dots: false,
        smartSpeed: 3000,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    /*------------------------------------
        Testimonial Carousel
    ------------------------------------- */
    $('.testimonial-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        animateOut: 'slideOutDown',
        animateIn: 'zoomInLeft',
        autoplay: false,
        dots: false,
        smartSpeed: 3000,
        navText: ["<i class='icon ion-md-arrow-back'></i>", "<i class='icon ion-md-arrow-forward'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    
    
    /*------------------------------------
        Pro Details Carousel Active
    -------------------------------------- */
    $('.pro-details-active').owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        loop: true,
        margin: 0,
        navText: ["<i class='icon ion-md-arrow-round-back'></i>", "<i class='icon ion-md-arrow-round-forward'></i>"],
        nav: true,
        dots: false,
        slideBy: 1,
        items: 1,
        responsiveClass: true,
    });
    
    
    /*------------------------------------
        Related Carousel Active
    -------------------------------------- */
    $('.related-project-active').owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        loop: true,
        margin: 15,
        nav: false,
        dots: false,
        slideBy: 1,
        items: 4,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1 // from 0px up to 479px screen size 
            },
            480: {
                items: 2, // from 480 to 677 
            },
            767: {
                items: 3, // from this breakpoint 678 to 959
            },
            960: {
                items: 4, // from this breakpoint 960 to 1199
            },
            1200: {
                items: 4,
            }
        }
    });
    
    
    /*------------------------------------
        Brand Carousel
    ------------------------------------- */
    $('.brand-logo-active').owlCarousel({
        loop: true,
        margin: 50,
        nav: false,
        animateOut: 'slideOutDown',
        animateIn: 'zoomInLeft',
        autoplay: true,
        dots: false,
        smartSpeed: 3000,
        navText: ["<i class='icon ion-md-arrow-back'></i>", "<i class='icon ion-md-arrow-forward'></i>"],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2,
                margin: 10,
            },
            600: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    });

    /*-------------------------------------------
        ScrollUp jquery
    --------------------------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    
    
    /*-------------------------------------------
        wow js active
    --------------------------------------------- */
    new WOW().init();
    
    /*=============  Gallery Mesonry Activation  ==============*/
    $('.iamge-loaded-active').imagesLoaded(function() {
        // filter items on button click
        $('.pro-cat-list').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        // change is-checked class on buttons
        $('.pro-cat-list button').on('click', function() {
            $('.pro-cat-list button').removeClass('is-checked');
            $(this).addClass('is-checked');
            var selector = $(this).attr('data-filter');
            $grid.isotope({
                filter: selector
            });
            return false;
        });
        // init Isotope
        var $grid = $('.masonry-wrap-active').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            transitionDuration: '0.7s',
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid-item',
            }
        });
    });
    
    
    /*--
    Header Search Toggle
    -----------------------------------*/
    var searchToggle = $('.menu-toggle');
    var ShowMenu = $('.show-menu');
    searchToggle.on('click', function() {
        
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            ShowMenu.removeClass('open');
            $('.menu-toggle .icon').removeClass('ion-md-close');
            $('.menu-toggle .icon').addClass('ion-md-menu');
        } else {
            $(this).addClass('open');
            ShowMenu.addClass('open');
            $('.menu-toggle .icon').removeClass('ion-md-menu');
            $('.menu-toggle .icon').addClass('ion-md-close');
        }
    });
    
    
    /*-------------------------------------------
        MeanMenu
    --------------------------------------------- */
    $('.main-menu-middel nav').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: '.mobile-menu'
    });
    
    



    
    
    
    
    
})(jQuery);