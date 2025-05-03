/* ========================================= DECLARATIONS =========================================*/

const myImages = Array.from(document.querySelectorAll('.item img'));
console.log(myImages); // Nodelist has all the 6 images(converted to Array)
const lightBoxContainer = document.querySelector('.lightbox-container');
const lightBoxItem = document.querySelector('.lightbox-item');
const rightArrow =  document.querySelector('.right');
const leftArrow =  document.querySelector('.left');
const closeBtn =  document.querySelector('.close');
var currentSlideIndex;

for(let i=0; i<myImages.length; i++){
    myImages[i].addEventListener('click', function(e){
        console.log(e.target.getAttribute('src')); // src of the clicked image
        const imgSrc = e.target.getAttribute('src');
        currentSlideIndex = myImages.indexOf(e.target);
        console.log(currentSlideIndex);
        lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
        lightBoxContainer.classList.replace('d-none','d-block');
    })
}

function nextSlide(){
    currentSlideIndex++;
    console.log(currentSlideIndex);
    if(currentSlideIndex==myImages.length){
        currentSlideIndex = 0;
    }
    var nextImgSrc = myImages[currentSlideIndex].getAttribute('src');
    console.log(nextImgSrc);
    lightBoxItem.style.backgroundImage = `url(${nextImgSrc})`;
}

function previousSlide(){
    currentSlideIndex--;
    console.log(currentSlideIndex);
    if(currentSlideIndex < 0){
        currentSlideIndex = myImages.length-1;
    }
    var previousImgSrc = myImages[currentSlideIndex].getAttribute('src');
    console.log(previousImgSrc);
    lightBoxItem.style.backgroundImage = `url(${previousImgSrc})`;
}

function close(){
    lightBoxContainer.classList.replace('d-block','d-none');
}

rightArrow.addEventListener('click', nextSlide)
leftArrow.addEventListener('click',previousSlide);
closeBtn.addEventListener('click', close);

document.addEventListener('keydown',function(e){
    console.log(e.key);
    if(e.key == 'ArrowRight'){
        nextSlide();
    }
    else if(e.key == 'ArrowLeft'){
        previousSlide();
    }
})