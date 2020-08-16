var slideIndex = 1;
var slides = document.querySelectorAll('.slide');


var objToArray = (obj) => {
    return [].map.call(obj, function(element) {
        return element
    })
};

const nextSlide = (n) => {
    display(slideIndex += n);
};

const currentSlide = (n) => {
    display(slideIndex = n);
};

const display = (n) => {
    var i;
    
    console.log(slides);
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i=0; i < slides.length; i++) {
        console.log(slides[i])
        slides[i].style.display = "none";
        
    }
    slides[slideIndex - 1].style.display = "flex";
};

display(slideIndex);