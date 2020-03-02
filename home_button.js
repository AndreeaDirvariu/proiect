var slideIndex = 1;
showSlides();

function nextSlides(){
    slideIndex++;
    showSlides(); 
}

function previousSlides(){
    slideIndex--;
    showSlides(); 
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(){
    var myVisual = document.getElementsByClassName("visual_Item");
    var dots = document.getElementsByClassName("dot");
    if (slideIndex > myVisual.length){slideIndex = 1}
    if (slideIndex < 1){slideIndex = myVisual.length}
    for(var i = 0; i<myVisual.length; i++){
        myVisual[i].style.display = "none";
    }
    for(var i = 0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    myVisual[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(nextSlides, 3000);
}