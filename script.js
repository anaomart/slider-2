let leftArrow = document.querySelector('.arrow-left');
let RightArrow = document.querySelector('.arrow-right');
let slides = document.querySelectorAll('.slider');
let slideNumber = document.querySelector('.slide-number');
let current = 0;


// set all images to none and activete the curent image 
function setDefault() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[current].style.display = "block";
    slideNumber.textContent = `#${current + 1}  of  ${slides.length} `

}
// right Arrow
RightArrow.onclick = function() {
        current < slides.length - 1 ? current += 1 : "";
        setDefault()
    }
    // Left Aroow
leftArrow.onclick = function() {
    current > 0 ? current -= 1 : ""
    setDefault()
}
setDefault()