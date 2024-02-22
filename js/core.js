document.onmousemove = (e) => {
  document.onclick = () =>{
    let circle = document.createElement('div');
    circle.classList.add('click');
    circle.style.left= e.pageX + 'px';
    circle.style.top= e.pageY + 'px';
    document.body.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 1000);
  };
};
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');

function goToSlide(slideIndex) {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(-${100 * slideIndex}%)`;
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
    
  });
}
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    goToSlide(index);
    currentSlide = index;
    updateIndicators();
  });
});

function updateIndicators() {
  indicators.forEach((indicator, index) => {
    indicator.classList.remove('active');
    if (index === currentSlide) {
      indicator.classList.add('active');
    }
  });
}

updateIndicators();