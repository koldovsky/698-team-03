(function(){
 $(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 4,
        margin: 40,
        nav: true,
        slideTransition: "ease-out",
        dots: false,
        callbacks: false,
        responsive: {
            0: {
                 items: 1,
               },
            648: {
                 items: 2,
               },
            872: {
                item: 4
            }
             },
        responsiveBaseElement: '.section__ourBurgers-carusel', //val
        navContainer: '.myNav',
        checkVisibility: false,
           });
         })
})();