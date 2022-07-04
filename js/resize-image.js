(function(){
    
    function setImageSize(){
        const img = document.querySelector('.resize-image'); 
        const textContainer = document.querySelector('.resize-post-container');
        const textBlock = document.querySelector(".resize-post-text"); 
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