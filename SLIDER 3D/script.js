const sliderContainer = document.getElementById('slider-container');
const slider = document.getElementById('slider');
const buttonLeft = document.getElementById('button-left');
const buttonRight = document.getElementById('button-right');


const sliderElements = document.querySelectorAll('.slider__element');

const rootStyles = document.documentElement.style;

let slideCounter = 0;
let isInTransition = false;
let sliderInterval; // Variable para almacenar el intervalo

const DIRECTION = {
  RIGHT: 'RIGHT',
  LEFT: 'LEFT',
};

console.log(sliderContainer)
console.log(slider)
console.log(sliderElements)


const getTransformValue = () =>
  Number(rootStyles.getPropertyValue('--slide-transform').replace('px', ''));

const reorderSlide = () => {
  const transformValue = getTransformValue();
  rootStyles.setProperty('--transition', 'none');
  if (slideCounter === sliderElements.length - 1) {
    slider.appendChild(slider.firstElementChild);
    rootStyles.setProperty(
      '--slide-transform',
      `${transformValue + sliderElements[slideCounter].scrollWidth}px`
    );
    slideCounter--;
  } else if (slideCounter === 0) {
    slider.prepend(slider.lastElementChild);
    rootStyles.setProperty(
      '--slide-transform',
      `${transformValue - sliderElements[slideCounter].scrollWidth}px`
    );
    slideCounter++;
  }

  isInTransition = false;
};

const moveSlide = (direction) => {
  if (isInTransition) return;
  const transformValue = getTransformValue();
  rootStyles.setProperty('--transition', 'transform 1s');
  isInTransition = true;
  if (direction === DIRECTION.LEFT) {
    rootStyles.setProperty(
      '--slide-transform',
      `${transformValue + sliderElements[slideCounter].scrollWidth}px`
    );
    slideCounter--;
  } else if (direction === DIRECTION.RIGHT) {
    rootStyles.setProperty(
      '--slide-transform',
      `${transformValue - sliderElements[slideCounter].scrollWidth}px`
    );
    slideCounter++;
  }
};

buttonRight.addEventListener('click', () => {
  clearInterval(sliderInterval);
  moveSlide(DIRECTION.RIGHT);
});

buttonLeft.addEventListener('click', () => {
  clearInterval(sliderInterval);
  moveSlide(DIRECTION.LEFT);
});

slider.addEventListener('transitionend', () => {
  reorderSlide();
  startSliderInterval();
});

function startSliderInterval() {
  clearInterval(sliderInterval);
  sliderInterval = setInterval(() => {
    moveSlide(DIRECTION.RIGHT);
  }, 5000);
}

startSliderInterval();