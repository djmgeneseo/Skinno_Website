$(document).ready(function () {
    $(document).on("scroll", onScroll);

    /*------ Sticky navigation ------*/
    $('.js--sticky-nav-waypoint').waypoint(function (direction) {
        if (direction === 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }

        /* Close all navibars on mobile when sticky appears/disappears  */
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        if (icon.hasClass('ion-android-close')) {
            nav.slideToggle(0);
            icon.removeClass('ion-android-close');
            icon.addClass('ion-navicon');
        }
    }, {
        offset: '160px;'
    });

    /*------ Scroll-on buttons ------*/
    $('.js--coming-soon-button').click(function () {
        $('html, body').animate({
            scrollTop: $('.section-app').offset().top - 76
        }, 1000)
    });

    $('.js--show-more-button').click(function () {
        $('html, body').animate({
            scrollTop: $('.section-about-us').offset().top -76
        }, 1000)
    });

    /*------ Navigation Scroll ------*/


    // Add smooth scrolling to all links
    $("a[href^='#']").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 800);
            //          , function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            //        window.location.hash = hash;
            //      });
        } // End if
    });

    /*------ Animations on Scroll ------*/
    $('.js--animation-waypoint-phone-scan').waypoint(function (direction) {
        $('.js--animation-waypoint-phone-scan').addClass('animated bounceInUp');
    }, {
        offset: '100%'
    });

    $('.js--animation-waypoint-left-box').waypoint(function (direction) {
        $('.js--animation-waypoint-left-box').addClass('animated fadeInUp');
    }, {
        offset: '70%'
    });

    $('.js--animation-waypoint-right-box').waypoint(function (direction) {
        $('.js--animation-waypoint-right-box').addClass('animated fadeInDown');
    }, {
        offset: '70%'
    });

    $('.js--animation-waypoint-features').waypoint(function (direction) {
        $('.js--animation-waypoint-features').addClass('animated fadeIn');
    }, {
        offset: '70%'
    });

    $('.js--animation-waypoint-phone').waypoint(function (direction) {
        $('.js--animation-waypoint-phone').addClass('animated slideInUp');
    }, {
        offset: '50%'
    });

    $('.js--animation-waypoint-quotes-1').waypoint(function (direction) {
        $('.js--animation-waypoint-quotes-1').addClass('animated fadeInLeft');
    }, {
        offset: '70%'
    });

    $('.js--animation-waypoint-quotes-2').waypoint(function (direction) {
        $('.js--animation-waypoint-quotes-2').addClass('animated fadeInRight');
    }, {
        offset: '70%'
    });

    $('.js--animation-waypoint-quotes-3').waypoint(function (direction) {
        $('.js--animation-waypoint-quotes-3').addClass('animated fadeInLeft');
    }, {
        offset: '70%'
    });

    $('.js--animation-waypoint-quotes-4').waypoint(function (direction) {
        $('.js--animation-waypoint-quotes-4').addClass('animated fadeInRight');
    }, {
        offset: '70%'
    });

    $('.js--animation-waypoint-quotes-5').waypoint(function (direction) {
        $('.js--animation-waypoint-quotes-5').addClass('animated fadeInLeft');
    }, {
        offset: '70%'
    });

    $('.js--animation-waypoint-quotes-6').waypoint(function (direction) {
        $('.js--animation-waypoint-quotes-6').addClass('animated fadeInRight');
    }, {
        offset: '70%'
    });

    $('.js--animation-waypoint-form2').waypoint(function (direction) {
        $('.js--animation-waypoint-form2').addClass('animated bounceInRight');
    }, {
        offset: '80%'
    });

    /*------ Mobile Navigation ------*/
    $('.js--nav-icon').click(function () {
        var nav = $('.main-nav');
        var icon = $('.js--nav-icon i');
        /* Open and close sticky and main */
        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon')) {
            icon.removeClass('ion-navicon');
            icon.addClass('ion-android-close');
        } else {
            icon.removeClass('ion-android-close');
            icon.addClass('ion-navicon');
        }
    });

    /*--------- Animations with delay --------*/
    $('.js--animation-waypoint-form').waypoint($(this).clearQueue().delay(1500).queue(function (direction) {
        $('.js--animation-waypoint-form').addClass('animated bounceInUp');
    }, {
        offset: '70%'
    }));

});

/*------ dynamic on-scroll navigation - active ------*/
function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#nav a:not(#back-to-top)').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top - 110 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#nav ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

