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
        if (window.matchMedia ('(min-width: 400px)').matches) {
            const secondSlideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
            slideContainer.innerHTML += slides[secondSlideIdx];
            if (window.matchMedia ('(min-width: 670px)').matches) {
                const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
                slideContainer.innerHTML += slides[thirdSlideIdx]; 
                if (window.matchMedia ('(min-width: 1000px)').matches) {
                    const fourthSlideIdx = thirdSlideIdx + 1 >= slides.length ? 0 : thirdSlideIdx + 1;
                    slideContainer.innerHTML += slides[fourthSlideIdx]; 
                    if (window.matchMedia ('(min-width: 1000px)').matches) {
                        const fifthSlideIdx = fourthSlideIdx + 1 >= slides.length ? 0 : fourthSlideIdx + 1;
                        slideContainer.innerHTML += slides[fifthSlideIdx]; 
                        if (window.matchMedia ('(min-width: 1200px)').matches) {
                            const sixthSlideIdx = fifthSlideIdx + 1 >= slides.length ? 0 : fifthSlideIdx + 1;
                            slideContainer.innerHTML += slides[sixthSlideIdx]; }
                    }
                }
            }   
        }
    }

    function nextSlide() {
        slideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
        showCurrentSlide();
    }

    function prevSlide() {
        slideIdx = slideIdx - 1 < 0 ? slides.length - 1 : slideIdx - 1;
        showCurrentSlide();
    }

    setInterval(nextSlide, 4000);
    showCurrentSlide();

    const rightButton = document.querySelector('.bottom-carousel_section > div > button.btn-right');
    rightButton.addEventListener('click', nextSlide);

    const leftButton = document.querySelector('.bottom-carousel_section > div > button.btn-left');
    leftButton.addEventListener('click', prevSlide);
    
    window.addEventListener('resize', showCurrentSlide);

})()