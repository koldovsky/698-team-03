(function () {

    const slides = [
    `<div><img src="img/illustration-burger.jfif" alt="burger"/></div>`,
    `<div><img src="img/illustration-holding-burger.jfif" alt="burger"/></div>`,
    `<div><img src="img/illustration-salad.jfif" alt="salad"/></div>`,
    `<div><img src="img/illustration-burger-holding.jfif" alt="burger"/></div>`,
    `<div><img src="img/illustration-menu.jfif" alt="burger menu"/></div>`,
    `<div><img src="img/illustration-burgers.jpg" alt="burgers"/></div>`,
    `<div><img src="img/illustration-happy-burger.jfif" alt="burger"/></div>`,
    ]

    let slideIdx = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector('.bottom-carousel .bottom-carousel_slide-container');
        slideContainer.innerHTML = slides[slideIdx];
    }

    function nextSlide() {
        slideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
        showCurrentSlide();
    }

    setInterval(nextSlide, 4000);

})()