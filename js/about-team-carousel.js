(function(){
    
    // array of slides
    const slidesContainer = document.querySelector('.about__team-carusel');
    const slidesArray = [
        `<div class="about__team-carusel-item">
        <div class="team-img-holder">
          <img src="img/team-01.jpg" alt="Mary Stone" />
        </div>
        <div class="team-info">
          <strong class="team-name">Mary Stone</strong>
          <span class="team-role">Gourmet Chef</span>
        </div>
      </div>`,
      `<div class="about__team-carusel-item">
      <div class="team-img-holder">
        <img src="img/team-02.jpg" alt="John Palmer" />
      </div>
      <div class="team-info">
        <strong class="team-name">John Palmer</strong>
        <span class="team-role">Sauce Chef</span>
      </div>
    </div>`,
    `<div class="about__team-carusel-item">
    <div class="team-img-holder">
      <img src="img/team-03.jpg" alt="Jessica Clower" />
    </div>
    <div class="team-info">
      <strong class="team-name">Jessica Clower</strong>
      <span class="team-role">Meat Specialist</span>
    </div>
  </div>`,
  `<div class="about__team-carusel-item">
  <div class="team-img-holder">
    <img src="img/team-04.jpg" alt="Helen Smith" />
  </div>
  <div class="team-info">
    <strong class="team-name">Helen Smith</strong>
    <span class="team-role">Burger Master</span>
  </div>
</div>`
    ];
    
    let slideIndex = 0;
    let secondSlideIndex = slideIndex +1;
    let thirdSlideIndex = secondSlideIndex +1;

    const btnPrev = document.querySelector('.team-prev-btn');
    const btnNext = document.querySelector('.team-next-btn');

    // show current slides
    function showCurrentSlides(animationSlide){
        slideIndex = slideIndex + 1 >=  slidesArray.length ? 0 : slideIndex + 1;
        secondSlideIndex = slideIndex + 1 >=  slidesArray.length ? 0 : slideIndex + 1;
        thirdSlideIndex = secondSlideIndex + 1 >=  slidesArray.length ? 0 : secondSlideIndex + 1;
        
        let slidesHtml = slidesArray[slideIndex];

        if(window.matchMedia('(min-width:400px)').matches){
          slideIndex = slideIndex + 1 >=  slidesArray.length ? 0 : slideIndex + 1;
          slidesHtml = slidesArray[slideIndex];
        
          if(window.matchMedia('(min-width:640px)').matches){
            secondSlideIndex = slideIndex + 1 >=  slidesArray.length ? 0 : slideIndex + 1;
            slidesHtml = slidesArray[slideIndex] + slidesArray[secondSlideIndex];
         
            if(window.matchMedia('(min-width:810px)').matches){
              secondSlideIndex = slideIndex + 1 >=  slidesArray.length ? 0 : slideIndex + 1;
              thirdSlideIndex = secondSlideIndex + 1 >=  slidesArray.length ? 0 : secondSlideIndex + 1;
              slidesHtml = slidesArray[slideIndex] + slidesArray[secondSlideIndex] + slidesArray[thirdSlideIndex];
            }
          }
        }
        slidesContainer.innerHTML = slidesHtml;
        if(animationSlide === 'last'){
          slidesContainer.lastChild.classList.add('show_slide');
        } else
        if(animationSlide === 'first'){
          slidesContainer.firstChild.classList.add('show_slide');
        }
      
    }

    // next slide
    function nextSlide(e){
      slideIndex = slideIndex - 1  < 0 ? slidesArray.length - 1 : slideIndex -1;
      secondSlideIndex = slideIndex - 1  < 0 ? slidesArray.length - 1 : slideIndex -1;
      thirdSlideIndex = secondSlideIndex - 1 < 0 ? slidesArray.length - 1 : secondSlideIndex -1;
        e.preventDefault();
        showCurrentSlides('last');
    }

    // prev slide
    function prevSlide(e){
      slideIndex = slideIndex + 1 >=  slidesArray.length ? 0 : slideIndex + 1;
      secondSlideIndex = slideIndex + 1 >=  slidesArray.length ? 0 : slideIndex + 1;
      thirdSlideIndex = secondSlideIndex + 1 >=  slidesArray.length ? 0 : secondSlideIndex + 1;
        e.preventDefault();
        showCurrentSlides('first'); 
    }

    btnPrev.addEventListener('click',prevSlide);
    btnNext.addEventListener('click',nextSlide);
    showCurrentSlides();
    window.addEventListener('resize',showCurrentSlides);

})();