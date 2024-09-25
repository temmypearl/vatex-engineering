document.querySelector('.nav-bar-toggle').addEventListener
('click', () => document.querySelector(".nav-links")
.classList.toggle('show'));





const slides = document.querySelectorAll('.slider');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
    //get current class
    const current = document.querySelector('.active');
    //remoe current class
    current.classList.remove('active');
    //check for next slide
    if (current.nextElementSibling) {
        //add current to next sibling
        current.nextElementSibling.classList.add('active');
    } else {
        //add current to start
        slides[0].classList.add('active');
    }
    setTimeout(() => current.classList.remove('active'));
}

const prevSlide = () => {
    ///get current class
    const current = document.querySelector('.active');
    //remove current class
    current.classList.remove('active');
    //check for previous slide
    if (current.previousElementSibling){
        //add current to next sibling
        current.previousElementSibling.classList.add('active');
    } else {
        //add current to last
        slides[slides.length - 1].classList.add('active');
    }
    setTimeout(() => current.classList.remove('active'));
}

//add button event
next.addEventListener('click', e => {
    nextSlide();
});

prev.addEventListener('click', e => {
    prevSlide();
});