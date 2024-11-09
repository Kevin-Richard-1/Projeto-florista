const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let   
 slideIndex = 0;

function showSlide(n) {
  slides[slideIndex].classList.remove('active');
  slideIndex = (n + slides.length) % slides.length;
  slides[slideIndex].classList.add('active');   

}

prev.addEventListener('click', () => {
  showSlide(slideIndex - 1);
});

next.addEventListener('click', () => {
  showSlide(slideIndex + 1);
});