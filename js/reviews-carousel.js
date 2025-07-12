document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.reviews__track');
  const slides = Array.from(track.children);
  const next = document.querySelector('.arrow--next');
  const prev = document.querySelector('.arrow--prev');

  let index = 1; // Начинаем с 1 из-за клона в начале
  let isTransitioning = false;

  // Клонируем первый и последний слайды
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);

  firstClone.classList.add('clone');
  lastClone.classList.add('clone');

  track.appendChild(firstClone);
  track.insertBefore(lastClone, slides[0]);

  const slideWidth = 100; // В процентах, т.к. каждый слайд 100% ширины

  // Устанавливаем начальный сдвиг с учётом клона слева
  track.style.transform = `translateX(-${index * slideWidth}%)`;

  function moveToSlide(newIndex) {
    if (isTransitioning) return; // Блокируем новые переходы пока идёт анимация
    isTransitioning = true;
    index = newIndex;
    track.style.transition = 'transform 0.5s ease-in-out';
    track.style.transform = `translateX(-${index * slideWidth}%)`;
  }

  track.addEventListener('transitionend', () => {
    isTransitioning = false;
    const slidesAll = track.children;

    // Если дошли до клона первого (справа)
    if (slidesAll[index].classList.contains('clone') && index === slidesAll.length -1) {
      track.style.transition = 'none';
      index = 1;
      track.style.transform = `translateX(-${index * slideWidth}%)`;
    }

    // Если дошли до клона последнего (слева)
    if (slidesAll[index].classList.contains('clone') && index === 0) {
      track.style.transition = 'none';
      index = slidesAll.length - 2;
      track.style.transform = `translateX(-${index * slideWidth}%)`;
    }
  });

  next.addEventListener('click', () => {
    if (index >= track.children.length -1) return;
    moveToSlide(index + 1);
  });

  prev.addEventListener('click', () => {
    if (index <= 0) return;
    moveToSlide(index -1);
  });
});
