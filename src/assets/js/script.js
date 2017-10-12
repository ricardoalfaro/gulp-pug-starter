// Auto invoked function
(function($) {
  'use strict';

    // Check if the user agent is mobile
    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    // Check if the element is visible in the viewport
    function isInViewport(element) {
      var bounds = element.getBoundingClientRect();

      return (
        bounds.top < window.innerHeight && 
        bounds.bottom > 0
      );
    }

    /*
    **********************************************
    * Slick
    **********************************************
    */
    $('.slick-next').css('color', 'red');

    $('.industries-content').slick({
      infinite: true,
      speed: 500,
      cssEase: 'linear'
    });

    /*
    **********************************************
    * jQuery stuff
    **********************************************
    */

    /*Sidenav Responsive
    $(".button-collapse").sideNav({
        menuWidth: 300,
        edge: 'right',
        closeOnClick: true,
        draggable: true
    });

    // Scrollspy
    $('.scrollspy').scrollSpy();*/

})(jQuery);