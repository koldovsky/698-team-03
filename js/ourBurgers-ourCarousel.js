(function(){
 $(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 4,
        margin: 40,
        loop: false,
        center: false,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        freeDrag: false,
        stagePadding: 0,
        autoWidth: false,
        mergeFit: true,
        nav: true,
        rewind: false,
        navText: ['Prev', 'Next'],
        navElement: 'span',
        slideBy: 1,
        slideTransition: "ease-out",
        dots: true,
        callbacks: false,
        responsive: {
            340: {
                 items: 1,
               },
            767: {
                 items: 2,
               },
            990: {
                item: 4
            }
             },
        //navContainer: ".myNav",
        //checkVisibility: true,
           });
         })
})();