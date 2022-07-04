(function(){
    
    function setImageSize(){
        const img = document.querySelector('.section__ingredients-image img');
        const textContainer = document.querySelector('.section__ingredients-post');
        const textBlock = document.querySelector(".ingredients-post-holder");
        if(window.matchMedia('(min-width:810px)').matches){
            if(textBlock.offsetHeight < textContainer.offsetHeight){
                textContainer.style.height = textBlock.offsetHeight+"px";
            }
            else {
                textContainer.style.height = "auto";
            }

            if(textContainer.clientHeight >= img.clientHeight){
                img.style.height = textContainer.clientHeight +"px";
                img.style.width = "auto";
            } else {
                
                img.style.height = "auto";
                img.style.width = "100%";
            }
        } else {
            img.style.height = "auto";
            img.style.width = "100%";
        }
    }

    window.addEventListener('load', setImageSize);
    window.addEventListener('resize', setImageSize);
})();