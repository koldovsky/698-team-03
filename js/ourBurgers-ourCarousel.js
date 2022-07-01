(function(){
 $(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 5,
        margin: 40,
        loop: false,
        center: false,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        freeDrag: false,
        stagePadding: 0,
        mergeFit: true,
        nav: true,
        rewind: false,
        slideTransition: "ease-out",
        dots: false,
        callbacks: false,
        responsive: {
            0: {
                items: 1,
               },
            400: {
                 items: 2,
               },
            500: {
                 items: 3,
               },
            600: {
                 items: 4,
               },
             },
        navContainer: ".myNav",
        checkVisibility: false,
           });
         })
})();