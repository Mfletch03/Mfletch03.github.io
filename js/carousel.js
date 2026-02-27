// carousel slideshow logic
document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.carousel');
  if (!carousel) return; // exit if no carousel on this page

  const slidesContainer = carousel.querySelector('.slides');
  const slides = carousel.querySelectorAll('.slide');
  let index = 0;

  function showSlide(i) {
    index = (i + slides.length) % slides.length;
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
  }

  carousel.querySelector('.prev').addEventListener('click', () => showSlide(index - 1));
  carousel.querySelector('.next').addEventListener('click', () => showSlide(index + 1));

  carousel.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') showSlide(index - 1);
    if (e.key === 'ArrowRight') showSlide(index + 1);
  });

  // autoplay with pause on hover/focus
  let autoplay = setInterval(() => showSlide(index + 1), 5000);
  carousel.addEventListener('mouseover', () => clearInterval(autoplay));
  carousel.addEventListener('mouseout', () => autoplay = setInterval(() => showSlide(index + 1), 5000));
  carousel.addEventListener('focusin', () => clearInterval(autoplay));
  carousel.addEventListener('focusout', () => autoplay = setInterval(() => showSlide(index + 1), 5000));
});
