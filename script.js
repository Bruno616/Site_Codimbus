let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const slidesContainer = document.querySelector(".slides");
const carrosselContainer = document.querySelector(".carrossel-container");

function mostrarSlide(n) {
  slideIndex = (n + slides.length) % slides.length;
  
  const containerWidth = carrosselContainer.offsetWidth;
  const slide = slides[slideIndex];
  const slideWidth = slide.offsetWidth;

  const offset = -slide.offsetLeft + (containerWidth - slideWidth) / 2;
  slidesContainer.style.transform = `translateX(${offset}px)`;

  slides.forEach((s, index) => {
    const inner = s.querySelector('.flip-inner');
    if (inner) inner.classList.remove('flipped');
    s.style.opacity = index === slideIndex ? '1' : '0';
    s.style.pointerEvents = index === slideIndex ? 'auto' : 'none';
  });
}

prev.addEventListener("click", (e) => {
  e.stopPropagation();
  mostrarSlide(slideIndex - 1);
});

next.addEventListener("click", (e) => {
  e.stopPropagation();
  mostrarSlide(slideIndex + 1);
});

slides.forEach(slide => {
  slide.addEventListener('click', (e) => {
    if (e.target.classList.contains('prev') || e.target.classList.contains('next')) return;
    const inner = slide.querySelector('.flip-inner');
    if (inner && slide.style.opacity === '1') inner.classList.toggle('flipped');
  });
});

setInterval(() => {
  mostrarSlide(slideIndex + 1);
}, 5000);

mostrarSlide(slideIndex);

const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("ativo");
});
